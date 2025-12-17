<?php
$icon = isset($attributes['icon']) ? $attributes['icon'] : '🦷';
$heading = isset($attributes['heading']) ? $attributes['heading'] : 'Feature Card Layout';
$text = isset($attributes['text']) ? $attributes['text'] : '';
$button_text = isset($attributes['buttonText']) ? $attributes['buttonText'] : 'Learn More';
$button_url = isset($attributes['buttonUrl']) ? $attributes['buttonUrl'] : '/locations/';
?>
<div class="feature-card">
    <div class="feature-card-image"><?php echo esc_html($icon); ?></div>
    <div class="feature-card-content">
        <h3><?php echo wp_kses_post($heading); ?></h3>
        <p><?php echo wp_kses_post($text); ?></p>
        <a href="<?php echo esc_url($button_url); ?>" class="card-btn"><?php echo esc_html($button_text); ?> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
    </div>
</div>
