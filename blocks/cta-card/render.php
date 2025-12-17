<?php
$icon = isset($attributes['icon']) ? $attributes['icon'] : '🦷';
$heading = isset($attributes['heading']) ? $attributes['heading'] : 'Ready for Your Best Smile?';
$text = isset($attributes['text']) ? $attributes['text'] : 'Schedule your visit today and discover why families trust Rodeo Dental.';
$button_text = isset($attributes['buttonText']) ? $attributes['buttonText'] : 'Book Visit';
$button_url = isset($attributes['buttonUrl']) ? $attributes['buttonUrl'] : '/locations/';
?>

<div class="cta-card">
    <div class="cta-card-icon"><?php echo esc_html($icon); ?></div>
    <h3><?php echo wp_kses_post($heading); ?></h3>
    <p><?php echo wp_kses_post($text); ?></p>
    <a href="<?php echo esc_url($button_url); ?>" class="cta-card-btn">
        <?php echo esc_html($button_text); ?>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
    </a>
</div>
