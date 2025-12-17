<?php
/**
 * DIAGNOSTIC TEST for Rodeo Blocks
 *
 * Add this code to your theme's functions.php TEMPORARILY to diagnose the issue.
 * Remove it after testing.
 */

// Test 1: Check if blocks are registered
add_action('init', function() {
    $registry = WP_Block_Type_Registry::get_instance();

    error_log('=== RODEO BLOCKS DIAGNOSTIC ===');
    error_log('Checking for registered Rodeo blocks...');

    $test_blocks = array(
        'rodeo/heading-with-icon',
        'rodeo/lead-paragraph',
        'rodeo/drop-cap',
        'rodeo/callout-box',
        'rodeo/process-steps'
    );

    foreach ($test_blocks as $block_name) {
        $is_registered = $registry->is_registered($block_name);
        error_log($block_name . ': ' . ($is_registered ? 'REGISTERED ✓' : 'NOT REGISTERED ✗'));

        if ($is_registered) {
            $block = $registry->get_registered($block_name);
            error_log('  - Has render_callback: ' . (isset($block->render_callback) ? 'YES' : 'NO'));
            error_log('  - Style handle: ' . ($block->style ?? 'none'));
        }
    }

    error_log('=== END DIAGNOSTIC ===');
}, 999);

// Test 2: Check if plugin constants are defined
add_action('wp_footer', function() {
    if (defined('RODEO_BLOCKS_VERSION')) {
        echo '<!-- Rodeo Blocks Plugin Active: v' . RODEO_BLOCKS_VERSION . ' -->';
        echo '<!-- Plugin Path: ' . RODEO_BLOCKS_PATH . ' -->';
        echo '<!-- Plugin URL: ' . RODEO_BLOCKS_URL . ' -->';
    } else {
        echo '<!-- Rodeo Blocks Plugin: NOT LOADED -->';
    }
});
