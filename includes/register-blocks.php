<?php
/**
 * Register all custom blocks
 */
function rodeo_register_all_blocks() {
    
    // Only register if Gutenberg is available
    if (!function_exists('register_block_type')) {
        return;
    }
    
    // Array of all blocks to register (31 total)
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
        if (file_exists($block_path)) {
            
            // Register block with JS
            if (file_exists($block_path . '/block.js')) {
                wp_register_script(
                    'rodeo-' . $block . '-block',
                    RODEO_BLOCKS_URL . 'blocks/' . $block . '/block.js',
                    array('wp-blocks', 'wp-element', 'wp-block-editor', 'wp-components'),
                    filemtime($block_path . '/block.js'),
                    false
                );
            }
            
            // Register block with CSS
            if (file_exists($block_path . '/style.css')) {
                wp_register_style(
                    'rodeo-' . $block . '-style',
                    RODEO_BLOCKS_URL . 'blocks/' . $block . '/style.css',
                    array(),
                    filemtime($block_path . '/style.css')
                );
            }
            
            // Register the block type
            register_block_type('rodeo/' . $block, array(
                'editor_script' => 'rodeo-' . $block . '-block',
                'style'         => 'rodeo-' . $block . '-style',
                'render_callback' => function($attributes) use ($block) {
                    $render_file = RODEO_BLOCKS_PATH . 'blocks/' . $block . '/render.php';
                    if (file_exists($render_file)) {
                        ob_start();
                        include $render_file;
                        return ob_get_clean();
                    }
                    return '';
                }
            ));
        }
    }
}
