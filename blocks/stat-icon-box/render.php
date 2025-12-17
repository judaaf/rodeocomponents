<?php
$icon = isset($attributes['icon']) ? $attributes['icon'] : '😊';
$number = isset($attributes['number']) ? $attributes['number'] : '98%';
$label = isset($attributes['label']) ? $attributes['label'] : 'Patient satisfaction rate';
?>
<div class="stat-icon-box">
    <div class="stat-icon"><?php echo esc_html($icon); ?></div>
    <div class="stat-content">
        <div class="stat-number"><?php echo esc_html($number); ?></div>
        <div class="stat-label"><?php echo esc_html($label); ?></div>
    </div>
</div>
