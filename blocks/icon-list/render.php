<?php
$items = isset($attributes['items']) ? $attributes['items'] : array(
    array('text' => 'Green check for benefits', 'iconType' => 'check'),
    array('text' => 'Blue icon for info', 'iconType' => 'info'),
    array('text' => 'Red icon for warnings', 'iconType' => 'warning')
);
?>

<ul class="icon-list">
    <?php foreach ($items as $item) : ?>
        <?php 
        $icon_type = isset($item['iconType']) ? $item['iconType'] : 'check';
        $text = isset($item['text']) ? $item['text'] : '';
        
        $icon_class = 'list-icon icon-' . esc_attr($icon_type);
        ?>
        <li>
            <span class="<?php echo esc_attr($icon_class); ?>">
                <?php if ($icon_type === 'check') : ?>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                <?php elseif ($icon_type === 'info') : ?>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 16v-4M12 8h.01"/>
                    </svg>
                <?php elseif ($icon_type === 'warning') : ?>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                        <line x1="12" y1="9" x2="12" y2="13"/>
                        <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                <?php elseif ($icon_type === 'star') : ?>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                <?php endif; ?>
            </span>
            <span><?php echo wp_kses_post($text); ?></span>
        </li>
    <?php endforeach; ?>
</ul>
