<?php
$icon = isset($attributes['icon']) ? $attributes['icon'] : '📅';
$heading = isset($attributes['heading']) ? $attributes['heading'] : 'Ready to Schedule?';
$text = isset($attributes['text']) ? $attributes['text'] : 'Book your appointment today!';
$button_text = isset($attributes['buttonText']) ? $attributes['buttonText'] : 'Book Now';
$button_url = isset($attributes['buttonUrl']) ? $attributes['buttonUrl'] : '/locations/';
$color_scheme = isset($attributes['colorScheme']) ? $attributes['colorScheme'] : 'red';
?>

<div class="inline-cta inline-cta-<?php echo esc_attr($color_scheme); ?>">
    <div class="inline-cta-icon"><?php echo esc_html($icon); ?></div>
    <div class="inline-cta-content">
        <h4><?php echo wp_kses_post($heading); ?></h4>
        <p><?php echo wp_kses_post($text); ?></p>
    </div>
    <a href="<?php echo esc_url($button_url); ?>" class="inline-cta-btn">
        <?php echo esc_html($button_text); ?>
    </a>
</div>
