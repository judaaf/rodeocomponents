<?php
/**
 * Plugin Name: Rodeo Blocks Minimal
 * Description: Absolutely minimal version - just activates
 * Version: 0.1
 */

if (!defined('ABSPATH')) exit;

add_action('admin_notices', function() {
    echo '<div class="notice notice-success"><p>✅ Rodeo Blocks Minimal is ACTIVE and working!</p></div>';
});
