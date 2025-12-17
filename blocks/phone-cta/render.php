<?php
$label = isset($attributes['label']) ? $attributes['label'] : 'Call Us Today';
$phone = isset($attributes['phone']) ? $attributes['phone'] : '(888) 453-4129';
$hours = isset($attributes['hours']) ? $attributes['hours'] : 'Mon-Fri 8am-6pm';

// Convert phone to tel: link format (remove spaces, parentheses, dashes)
$phone_link = preg_replace('/[^0-9]/', '', $phone);
?>

<div class="cta-phone">
    <div class="cta-phone-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
    </div>
    <div class="cta-phone-content">
        <div class="cta-phone-label"><?php echo esc_html($label); ?></div>
        <a href="tel:<?php echo esc_attr($phone_link); ?>" class="cta-phone-number">
            <?php echo esc_html($phone); ?>
        </a>
        <div class="cta-phone-hours"><?php echo esc_html($hours); ?></div>
    </div>
</div>
