<?php
/**
 * Register custom block category
 */
function rodeo_blocks_category($categories, $post) {
    return array_merge(
        array(
            array(
                'slug'  => 'rodeo-blocks',
                'title' => __('Rodeo Components', 'rodeo-blocks'),
                'icon'  => 'admin-customizer',
            ),
        ),
        $categories
    );
}
