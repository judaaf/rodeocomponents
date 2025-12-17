<?php
$title = isset($attributes['title']) ? $attributes['title'] : 'Checklist Box';
$items = isset($attributes['items']) ? $attributes['items'] : array(
    array('title' => 'Item One', 'description' => 'Description of first item'),
    array('title' => 'Item Two', 'description' => 'Description of second item'),
    array('title' => 'Item Three', 'description' => 'Description of third item')
);
?>
<div class="checklist-box">
    <div class="checklist-title"><span>✅</span> <?php echo wp_kses_post($title); ?></div>
    <ul class="checklist-items">
        <?php foreach ($items as $item) : ?>
            <li>
                <div class="checklist-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                </div>
                <div class="checklist-text">
                    <strong><?php echo wp_kses_post($item['title']); ?></strong>
                    <span><?php echo wp_kses_post($item['description']); ?></span>
                </div>
            </li>
        <?php endforeach; ?>
    </ul>
</div>
