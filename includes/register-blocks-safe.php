<?php
/**
 * Register all custom blocks - SAFE VERSION
 * This version avoids closures that might cause issues
 */
function rodeo_register_all_blocks_safe() {

    // Only register if Gutenberg is available
    if (!function_exists('register_block_type')) {
        return;
    }

    // Array of all blocks to register (32 total)
    $blocks = array(
        // Typography & Text (4)
        'heading-with-icon',
        'lead-paragraph',
        'drop-cap',
        'highlight-text',

        // Statistics & Data (4)
        'stat-highlight',
        'stats-row',
        'stat-icon-box',
        'stats-comparison',

        // Callouts & Alerts (1)
        'callout-box',

        // Lists & Steps (4)
        'icon-list',
        'process-steps',
        'horizontal-steps',
        'timeline',

        // Checklists & Comparisons (3)
        'checklist-box',
        'pros-cons',
        'comparison-table',

        // CTAs & Actions (4)
        'inline-cta',
        'cta-banner',
        'cta-card',
        'phone-cta',

        // Service & Features (2)
        'service-cards',
        'feature-card',

        // Media (3)
        'before-after',
        'video-placeholder',
        'image-block',

        // Interactive (3)
        'faq-accordion',
        'faq-grid',
        'tabs',

        // Social Proof (2)
        'blockquote',
        'testimonial-card',

        // Tables & Data (2)
        'data-table',
        'trust-bar',
    );

    // Register each block
    foreach ($blocks as $block) {
        $block_path = RODEO_BLOCKS_PATH . 'blocks/' . $block;

        // Check if block directory exists
        if (!file_exists($block_path)) {
            continue;
        }

        // Register block with JS
        $script_file = $block_path . '/block.js';
        if (file_exists($script_file)) {
            wp_register_script(
                'rodeo-' . $block . '-block',
                RODEO_BLOCKS_URL . 'blocks/' . $block . '/block.js',
                array('wp-blocks', 'wp-element', 'wp-block-editor', 'wp-components'),
                filemtime($script_file),
                false
            );
        }

        // Register block with CSS
        $style_file = $block_path . '/style.css';
        if (file_exists($style_file)) {
            wp_register_style(
                'rodeo-' . $block . '-style',
                RODEO_BLOCKS_URL . 'blocks/' . $block . '/style.css',
                array(),
                filemtime($style_file)
            );
        }

        // Register the block type WITHOUT closure
        register_block_type('rodeo/' . $block, array(
            'editor_script' => 'rodeo-' . $block . '-block',
            'style'         => 'rodeo-' . $block . '-style',
            'render_callback' => 'rodeo_render_block_' . str_replace('-', '_', $block)
        ));
    }
}

// Create individual render functions for each block
function rodeo_render_block_heading_with_icon($attributes) {
    wp_enqueue_style('rodeo-heading-with-icon-style');
    return rodeo_get_block_output('heading-with-icon', $attributes);
}

function rodeo_render_block_lead_paragraph($attributes) {
    wp_enqueue_style('rodeo-lead-paragraph-style');
    return rodeo_get_block_output('lead-paragraph', $attributes);
}

function rodeo_render_block_drop_cap($attributes) {
    wp_enqueue_style('rodeo-drop-cap-style');
    return rodeo_get_block_output('drop-cap', $attributes);
}

function rodeo_render_block_highlight_text($attributes) {
    wp_enqueue_style('rodeo-highlight-text-style');
    return rodeo_get_block_output('highlight-text', $attributes);
}

function rodeo_render_block_stat_highlight($attributes) {
    wp_enqueue_style('rodeo-stat-highlight-style');
    return rodeo_get_block_output('stat-highlight', $attributes);
}

function rodeo_render_block_stats_row($attributes) {
    wp_enqueue_style('rodeo-stats-row-style');
    return rodeo_get_block_output('stats-row', $attributes);
}

function rodeo_render_block_stat_icon_box($attributes) {
    wp_enqueue_style('rodeo-stat-icon-box-style');
    return rodeo_get_block_output('stat-icon-box', $attributes);
}

function rodeo_render_block_stats_comparison($attributes) {
    wp_enqueue_style('rodeo-stats-comparison-style');
    return rodeo_get_block_output('stats-comparison', $attributes);
}

function rodeo_render_block_callout_box($attributes) {
    wp_enqueue_style('rodeo-callout-box-style');
    return rodeo_get_block_output('callout-box', $attributes);
}

function rodeo_render_block_icon_list($attributes) {
    wp_enqueue_style('rodeo-icon-list-style');
    return rodeo_get_block_output('icon-list', $attributes);
}

function rodeo_render_block_process_steps($attributes) {
    wp_enqueue_style('rodeo-process-steps-style');
    return rodeo_get_block_output('process-steps', $attributes);
}

function rodeo_render_block_horizontal_steps($attributes) {
    wp_enqueue_style('rodeo-horizontal-steps-style');
    return rodeo_get_block_output('horizontal-steps', $attributes);
}

function rodeo_render_block_timeline($attributes) {
    wp_enqueue_style('rodeo-timeline-style');
    return rodeo_get_block_output('timeline', $attributes);
}

function rodeo_render_block_checklist_box($attributes) {
    wp_enqueue_style('rodeo-checklist-box-style');
    return rodeo_get_block_output('checklist-box', $attributes);
}

function rodeo_render_block_pros_cons($attributes) {
    wp_enqueue_style('rodeo-pros-cons-style');
    return rodeo_get_block_output('pros-cons', $attributes);
}

function rodeo_render_block_comparison_table($attributes) {
    wp_enqueue_style('rodeo-comparison-table-style');
    return rodeo_get_block_output('comparison-table', $attributes);
}

function rodeo_render_block_inline_cta($attributes) {
    wp_enqueue_style('rodeo-inline-cta-style');
    return rodeo_get_block_output('inline-cta', $attributes);
}

function rodeo_render_block_cta_banner($attributes) {
    wp_enqueue_style('rodeo-cta-banner-style');
    return rodeo_get_block_output('cta-banner', $attributes);
}

function rodeo_render_block_cta_card($attributes) {
    wp_enqueue_style('rodeo-cta-card-style');
    return rodeo_get_block_output('cta-card', $attributes);
}

function rodeo_render_block_phone_cta($attributes) {
    wp_enqueue_style('rodeo-phone-cta-style');
    return rodeo_get_block_output('phone-cta', $attributes);
}

function rodeo_render_block_service_cards($attributes) {
    wp_enqueue_style('rodeo-service-cards-style');
    return rodeo_get_block_output('service-cards', $attributes);
}

function rodeo_render_block_feature_card($attributes) {
    wp_enqueue_style('rodeo-feature-card-style');
    return rodeo_get_block_output('feature-card', $attributes);
}

function rodeo_render_block_before_after($attributes) {
    wp_enqueue_style('rodeo-before-after-style');
    return rodeo_get_block_output('before-after', $attributes);
}

function rodeo_render_block_video_placeholder($attributes) {
    wp_enqueue_style('rodeo-video-placeholder-style');
    return rodeo_get_block_output('video-placeholder', $attributes);
}

function rodeo_render_block_image_block($attributes) {
    wp_enqueue_style('rodeo-image-block-style');
    return rodeo_get_block_output('image-block', $attributes);
}

function rodeo_render_block_faq_accordion($attributes) {
    wp_enqueue_style('rodeo-faq-accordion-style');
    return rodeo_get_block_output('faq-accordion', $attributes);
}

function rodeo_render_block_faq_grid($attributes) {
    wp_enqueue_style('rodeo-faq-grid-style');
    return rodeo_get_block_output('faq-grid', $attributes);
}

function rodeo_render_block_tabs($attributes) {
    wp_enqueue_style('rodeo-tabs-style');
    return rodeo_get_block_output('tabs', $attributes);
}

function rodeo_render_block_blockquote($attributes) {
    wp_enqueue_style('rodeo-blockquote-style');
    return rodeo_get_block_output('blockquote', $attributes);
}

function rodeo_render_block_testimonial_card($attributes) {
    wp_enqueue_style('rodeo-testimonial-card-style');
    return rodeo_get_block_output('testimonial-card', $attributes);
}

function rodeo_render_block_data_table($attributes) {
    wp_enqueue_style('rodeo-data-table-style');
    return rodeo_get_block_output('data-table', $attributes);
}

function rodeo_render_block_trust_bar($attributes) {
    wp_enqueue_style('rodeo-trust-bar-style');
    return rodeo_get_block_output('trust-bar', $attributes);
}

// Helper function to get block output
function rodeo_get_block_output($block, $attributes) {
    $render_file = RODEO_BLOCKS_PATH . 'blocks/' . $block . '/render.php';
    if (file_exists($render_file)) {
        ob_start();
        include $render_file;
        return ob_get_clean();
    }
    return '';
}
