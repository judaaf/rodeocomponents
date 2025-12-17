<?php
$icon = isset($attributes['icon']) ? $attributes['icon'] : '🎉';
$heading = isset($attributes['heading']) ? $attributes['heading'] : 'New Patient Special!';
$text = isset($attributes['text']) ? $attributes['text'] : 'Free exam & X-rays';
$button_text = isset($attributes['buttonText']) ? $attributes['buttonText'] : 'Claim Offer';
$button_url = isset($attributes['buttonUrl']) ? $attributes['buttonUrl'] : '/locations/';
?>

<div class="cta-banner">
    <div class="cta-banner-content">
        <span class="cta-banner-icon"><?php echo esc_html($icon); ?></span>
        <div>
            <h4><?php echo wp_kses_post($heading); ?></h4>
            <p><?php echo wp_kses_post($text); ?></p>
        </div>
    </div>
    <a href="<?php echo esc_url($button_url); ?>" class="cta-banner-btn">
        <?php echo esc_html($button_text); ?>
    </a>
</div>
