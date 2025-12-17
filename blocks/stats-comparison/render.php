<?php
$bad_number = isset($attributes['badNumber']) ? $attributes['badNumber'] : '72%';
$bad_label = isset($attributes['badLabel']) ? $attributes['badLabel'] : 'Without Checkups';
$good_number = isset($attributes['goodNumber']) ? $attributes['goodNumber'] : '23%';
$good_label = isset($attributes['goodLabel']) ? $attributes['goodLabel'] : 'With Checkups';
?>
<div class="stats-comparison">
    <div class="stat-box bad">
        <div class="stat-number"><?php echo esc_html($bad_number); ?></div>
        <div class="stat-label"><?php echo esc_html($bad_label); ?></div>
    </div>
    <div class="stat-vs">VS</div>
    <div class="stat-box good">
        <div class="stat-number"><?php echo esc_html($good_number); ?></div>
        <div class="stat-label"><?php echo esc_html($good_label); ?></div>
    </div>
</div>
