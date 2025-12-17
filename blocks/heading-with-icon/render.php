<?php
$icon_type = isset($attributes['iconType']) ? $attributes['iconType'] : 'emoji';
$icon_emoji = isset($attributes['iconEmoji']) ? $attributes['iconEmoji'] : '🦷';
$icon_image = isset($attributes['iconImage']) ? $attributes['iconImage'] : '';
$heading = isset($attributes['heading']) ? $attributes['heading'] : 'Heading with Icon';
$heading_level = isset($attributes['headingLevel']) ? $attributes['headingLevel'] : 'h2';
$icon_color = isset($attributes['iconColor']) ? $attributes['iconColor'] : '#00ACF2';
$icon_bg_color = isset($attributes['iconBgColor']) ? $attributes['iconBgColor'] : 'linear-gradient(135deg, #00ACF2, #0092CC)';
$heading_color = isset($attributes['headingColor']) ? $attributes['headingColor'] : '#00668F';

$heading_tag = in_array($heading_level, ['h1', 'h2', 'h3', 'h4']) ? $heading_level : 'h2';
?>

<div class="heading-with-icon">
    <div class="heading-icon-wrapper" style="background: <?php echo esc_attr($icon_bg_color); ?>;">
        <?php if ($icon_type === 'emoji') : ?>
            <span class="heading-icon-emoji"><?php echo esc_html($icon_emoji); ?></span>
        <?php elseif ($icon_type === 'image' && !empty($icon_image)) : ?>
            <img src="<?php echo esc_url($icon_image); ?>" alt="" class="heading-icon-image">
        <?php elseif ($icon_type === 'html') : ?>
            <div class="heading-icon-html"><?php echo wp_kses_post($icon_emoji); ?></div>
        <?php endif; ?>
    </div>
    <<?php echo $heading_tag; ?> style="color: <?php echo esc_attr($heading_color); ?>;">
        <?php echo wp_kses_post($heading); ?>
    </<?php echo $heading_tag; ?>>
</div>
