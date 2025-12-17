<?php
/**
 * Plugin Name: Rodeo Dental Blocks
 * Plugin URI: https://upperform.com
 * Description: Custom Gutenberg blocks for Rodeo Dental blog posts - designed to work with Bricks Builder
 * Version: 1.0.0
 * Author: Upperform
 * Author URI: https://upperform.com
 * License: GPL v2 or later
 * Text Domain: rodeo-blocks
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('RODEO_BLOCKS_VERSION', '1.0.0');
define('RODEO_BLOCKS_PATH', plugin_dir_path(__FILE__));
define('RODEO_BLOCKS_URL', plugin_dir_url(__FILE__));

/**
 * Initialize the plugin
 */
class Rodeo_Blocks {
    
    public function __construct() {
        add_action('init', array($this, 'init'));
        add_action('enqueue_block_editor_assets', array($this, 'enqueue_editor_assets'));
        add_action('enqueue_block_assets', array($this, 'enqueue_block_assets'));
    }
    
    /**
     * Initialize plugin
     */
    public function init() {
        // Load dependencies
        require_once RODEO_BLOCKS_PATH . 'includes/block-categories.php';
        require_once RODEO_BLOCKS_PATH . 'includes/register-blocks.php';
        
        // Register block category
        add_filter('block_categories_all', 'rodeo_blocks_category', 10, 2);
        
        // Register all blocks
        rodeo_register_all_blocks();
    }
    
    /**
     * Enqueue editor-only assets
     */
    public function enqueue_editor_assets() {
        // Common editor styles
        wp_enqueue_style(
            'rodeo-blocks-editor',
            RODEO_BLOCKS_URL . 'assets/css/editor.css',
            array(),
            RODEO_BLOCKS_VERSION
        );
    }
    
    /**
     * Enqueue frontend + editor assets
     */
    public function enqueue_block_assets() {
        // Google Fonts (matching your template)
        wp_enqueue_style(
            'rodeo-barlow-condensed',
            'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&display=swap',
            array(),
            null
        );
    }
}

// Initialize the plugin
new Rodeo_Blocks();
