<?php
$items = isset($attributes['items']) ? $attributes['items'] : array(
    array('date' => 'Day 1', 'title' => 'Consultation', 'description' => 'Initial meeting to discuss goals.'),
    array('date' => 'Week 2', 'title' => 'Treatment', 'description' => 'Begin the treatment process.'),
    array('date' => 'Week 4', 'title' => 'Complete', 'description' => 'Enjoy your new smile!')
);
?>

<div class="timeline">
    <?php foreach ($items as $item) : ?>
        <div class="timeline-item">
            <div class="timeline-date"><?php echo esc_html($item['date']); ?></div>
            <h4><?php echo wp_kses_post($item['title']); ?></h4>
            <p><?php echo wp_kses_post($item['description']); ?></p>
        </div>
    <?php endforeach; ?>
</div>
