<?php
$cards = isset($attributes['cards']) ? $attributes['cards'] : array(
    array('icon' => '🦷', 'title' => 'General', 'description' => 'Comprehensive dental care for the whole family.', 'link' => '#'),
    array('icon' => '😁', 'title' => 'Cosmetic', 'description' => 'Transform your smile with cosmetic treatments.', 'link' => '#'),
    array('icon' => '👶', 'title' => 'Pediatric', 'description' => 'Kid-friendly dental care in a fun environment.', 'link' => '#')
);
$count = count($cards);
$columns = min($count, 3);
?>
<div class="cards-grid cards-grid-<?php echo esc_attr($columns); ?>">
    <?php foreach ($cards as $card) : ?>
        <div class="service-card">
            <div class="service-card-icon"><?php echo esc_html($card['icon']); ?></div>
            <h3><?php echo wp_kses_post($card['title']); ?></h3>
            <p><?php echo wp_kses_post($card['description']); ?></p>
            <a href="<?php echo esc_url($card['link']); ?>" class="service-card-link">Learn More →</a>
        </div>
    <?php endforeach; ?>
</div>
