<?php
$stats = isset($attributes['stats']) ? $attributes['stats'] : array(
    array('number' => '50+', 'label' => 'Locations'),
    array('number' => '1M+', 'label' => 'Patients'),
    array('number' => '15+', 'label' => 'Years')
);
$count = count($stats);
$columns = min($count, 4);
?>

<div class="stats-row stats-row-<?php echo esc_attr($columns); ?>">
    <?php foreach ($stats as $stat) : ?>
        <div class="stat-item">
            <div class="stat-number"><?php echo esc_html($stat['number']); ?></div>
            <div class="stat-label"><?php echo esc_html($stat['label']); ?></div>
        </div>
    <?php endforeach; ?>
</div>
