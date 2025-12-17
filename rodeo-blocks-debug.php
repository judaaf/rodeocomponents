<?php
/**
 * Plugin Name: Rodeo Dental Blocks (Debug Version)
 * Description: Debug version that shows errors
 * Version: 1.0.0-debug
 */

// Show all errors
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Try to define constants
try {
    define('RODEO_BLOCKS_VERSION', '1.0.0-debug');
    define('RODEO_BLOCKS_PATH', plugin_dir_path(__FILE__));
    define('RODEO_BLOCKS_URL', plugin_dir_url(__FILE__));

    // Test that files exist
    $required_files = array(
        'includes/block-categories.php',
        'includes/register-blocks-safe.php'
    );

    foreach ($required_files as $file) {
        $full_path = RODEO_BLOCKS_PATH . $file;
        if (!file_exists($full_path)) {
            wp_die("MISSING FILE: $file at path: $full_path");
        }
    }

} catch (Exception $e) {
    wp_die('Error defining constants: ' . $e->getMessage());
}

/**
 * Initialize the plugin
 */
class Rodeo_Blocks_Debug {

    public function __construct() {
        try {
            add_action('init', array($this, 'init'), 5);
            add_action('admin_notices', array($this, 'show_status'));
        } catch (Exception $e) {
            wp_die('Error in constructor: ' . $e->getMessage());
        }
    }

    public function show_status() {
        echo '<div class="notice notice-info"><p><strong>Rodeo Blocks Debug:</strong> Plugin loaded. Path: ' . RODEO_BLOCKS_PATH . '</p></div>';
    }

    public function init() {
        try {
            // Load dependencies
            require_once RODEO_BLOCKS_PATH . 'includes/block-categories.php';

            // Test if we can load the safe registration
            if (!file_exists(RODEO_BLOCKS_PATH . 'includes/register-blocks-safe.php')) {
                add_action('admin_notices', function() {
                    echo '<div class="notice notice-error"><p>register-blocks-safe.php NOT FOUND!</p></div>';
                });
                return;
            }

            require_once RODEO_BLOCKS_PATH . 'includes/register-blocks-safe.php';

            // Test if function exists
            if (!function_exists('rodeo_register_all_blocks_safe')) {
                add_action('admin_notices', function() {
                    echo '<div class="notice notice-error"><p>Function rodeo_register_all_blocks_safe does not exist!</p></div>';
                });
                return;
            }

            // Register block category
            add_filter('block_categories_all', 'rodeo_blocks_category', 10, 2);

            // Try to register blocks
            rodeo_register_all_blocks_safe();

            add_action('admin_notices', function() {
                echo '<div class="notice notice-success"><p>All blocks registered successfully!</p></div>';
            });

        } catch (Exception $e) {
            add_action('admin_notices', function() use ($e) {
                echo '<div class="notice notice-error"><p>ERROR in init(): ' . esc_html($e->getMessage()) . '</p></div>';
            });
        } catch (Error $e) {
            add_action('admin_notices', function() use ($e) {
                echo '<div class="notice notice-error"><p>FATAL ERROR in init(): ' . esc_html($e->getMessage()) . ' in ' . $e->getFile() . ':' . $e->getLine() . '</p></div>';
            });
        }
    }
}

// Initialize
try {
    new Rodeo_Blocks_Debug();
} catch (Exception $e) {
    wp_die('Fatal error creating plugin instance: ' . $e->getMessage());
} catch (Error $e) {
    wp_die('PHP Fatal error: ' . $e->getMessage() . ' in ' . $e->getFile() . ':' . $e->getLine());
}
