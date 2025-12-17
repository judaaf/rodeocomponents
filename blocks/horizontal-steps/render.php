<?php
$steps = isset($attributes['steps']) ? $attributes['steps'] : array(
    array('title' => 'Book', 'description' => 'Schedule online'),
    array('title' => 'Visit', 'description' => 'Come in'),
    array('title' => 'Care', 'description' => 'Get treatment'),
    array('title' => 'Smile', 'description' => 'Enjoy results')
);
$count = count($steps);
$columns = min($count, 4);
?>

<div class="process-steps-horizontal steps-<?php echo esc_attr($columns); ?>">
    <?php foreach ($steps as $index => $step) : ?>
        <div class="process-step-h">
            <div class="step-number"><?php echo ($index + 1); ?></div>
            <h4><?php echo wp_kses_post($step['title']); ?></h4>
            <p><?php echo wp_kses_post($step['description']); ?></p>
        </div>
    <?php endforeach; ?>
</div>
