<?php
/**
 * Plugin Name: Rodeo Dental Blocks (Test)
 * Description: Diagnostic version to test activation
 * Version: 1.0.1-test
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Test 1: Can we define constants?
define('RODEO_BLOCKS_VERSION', '1.0.1-test');
define('RODEO_BLOCKS_PATH', plugin_dir_path(__FILE__));
define('RODEO_BLOCKS_URL', plugin_dir_url(__FILE__));

// Test 2: Can we create the class?
class Rodeo_Blocks_Test {

    public function __construct() {
        add_action('admin_notices', array($this, 'test_notice'));
        add_action('init', array($this, 'init'), 5);
    }

    public function test_notice() {
        echo '<div class="notice notice-success"><p>Rodeo Blocks Test Plugin Loaded Successfully!</p></div>';
    }

    public function init() {
        // Test 3: Can we load dependencies?
        if (!file_exists(RODEO_BLOCKS_PATH . 'includes/block-categories.php')) {
            add_action('admin_notices', function() {
                echo '<div class="notice notice-error"><p>ERROR: block-categories.php not found!</p></div>';
            });
            return;
        }

        if (!file_exists(RODEO_BLOCKS_PATH . 'includes/register-blocks.php')) {
            add_action('admin_notices', function() {
                echo '<div class="notice notice-error"><p>ERROR: register-blocks.php not found!</p></div>';
            });
            return;
        }

        // Load dependencies
        require_once RODEO_BLOCKS_PATH . 'includes/block-categories.php';
        require_once RODEO_BLOCKS_PATH . 'includes/register-blocks.php';

        // Test 4: Can we register blocks?
        try {
            add_filter('block_categories_all', 'rodeo_blocks_category', 10, 2);
            rodeo_register_all_blocks();

            add_action('admin_notices', function() {
                echo '<div class="notice notice-success"><p>Blocks registered successfully!</p></div>';
            });
        } catch (Exception $e) {
            add_action('admin_notices', function() use ($e) {
                echo '<div class="notice notice-error"><p>ERROR: ' . esc_html($e->getMessage()) . '</p></div>';
            });
        }
    }
}

// Initialize
new Rodeo_Blocks_Test();
