<?php
$steps = isset($attributes['steps']) ? $attributes['steps'] : array(
    array('title' => 'Book', 'description' => 'Schedule your appointment online or by phone.', 'color' => 'blue'),
    array('title' => 'Visit', 'description' => 'Come in for your dental checkup.', 'color' => 'blue'),
    array('title' => 'Care', 'description' => 'Get the treatment you need.', 'color' => 'blue'),
    array('title' => 'Smile', 'description' => 'Enjoy your healthy, beautiful smile!', 'color' => 'blue')
);
?>

<div class="process-steps">
    <?php foreach ($steps as $index => $step) : ?>
        <?php 
        $color = isset($step['color']) ? $step['color'] : 'blue';
        ?>
        <div class="process-step step-<?php echo esc_attr($color); ?>">
            <div class="step-number"><?php echo ($index + 1); ?></div>
            <div class="step-content">
                <h3 class="step-title"><?php echo wp_kses_post($step['title']); ?></h3>
                <p class="step-description"><?php echo wp_kses_post($step['description']); ?></p>
            </div>
        </div>
    <?php endforeach; ?>
</div>
