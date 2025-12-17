<?php
$items = isset($attributes['items']) ? $attributes['items'] : array(
    array('icon' => '✅', 'label' => 'Verified'),
    array('icon' => '🏆', 'label' => 'Award Winner'),
    array('icon' => '⭐', 'label' => '5-Star Rated'),
    array('icon' => '🛡️', 'label' => 'Insured')
);
$count = count($items);
$columns = min($count, 4);
?>
<div class="trust-bar trust-bar-<?php echo esc_attr($columns); ?>">
    <?php foreach ($items as $item) : ?>
        <div class="trust-item">
            <div class="trust-item-icon"><?php echo esc_html($item['icon']); ?></div>
            <div class="trust-item-label"><?php echo esc_html($item['label']); ?></div>
        </div>
    <?php endforeach; ?>
</div>
