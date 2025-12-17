<?php
$rows = isset($attributes['rows']) ? $attributes['rows'] : array(
    array('feature' => 'Routine Checkups', 'basic' => 'Every 12 months', 'premium' => 'Every 6 months'),
    array('feature' => 'X-Rays Included', 'basic' => '1 per year', 'premium' => 'Unlimited'),
    array('feature' => 'Emergency Care', 'basic' => 'Business hours', 'premium' => '24/7 access')
);
?>
<div class="comparison-table">
    <div class="comparison-grid">
        <div class="comparison-header">Feature</div>
        <div class="comparison-header basic">Basic</div>
        <div class="comparison-header premium">Premium</div>
        
        <?php foreach ($rows as $row) : ?>
            <div class="comparison-cell feature"><?php echo wp_kses_post($row['feature']); ?></div>
            <div class="comparison-cell basic"><?php echo wp_kses_post($row['basic']); ?></div>
            <div class="comparison-cell premium"><?php echo wp_kses_post($row['premium']); ?></div>
        <?php endforeach; ?>
    </div>
</div>
