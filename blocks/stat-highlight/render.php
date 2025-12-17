<?php
$stat_number = isset($attributes['statNumber']) ? $attributes['statNumber'] : '50%';
$stat_label = isset($attributes['statLabel']) ? $attributes['statLabel'] : 'Reduction in cavity risk with regular checkups';
$stat_source = isset($attributes['statSource']) ? $attributes['statSource'] : '';
?>

<div class="stat-highlight">
    <div class="stat-number"><?php echo esc_html($stat_number); ?></div>
    <div class="stat-label"><?php echo esc_html($stat_label); ?></div>
    <?php if ($stat_source) : ?>
        <div class="stat-source">— <?php echo esc_html($stat_source); ?></div>
    <?php endif; ?>
</div>
