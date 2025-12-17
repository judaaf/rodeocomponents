<?php
$icon_type = isset($attributes['iconType']) ? $attributes['iconType'] : 'emoji';
$icon_value = isset($attributes['iconValue']) ? $attributes['iconValue'] : '🦷';
$heading_text = isset($attributes['headingText']) ? $attributes['headingText'] : 'Heading with Icon';
$heading_level = isset($attributes['headingLevel']) ? $attributes['headingLevel'] : 'h2';
$icon_bg_color = isset($attributes['iconBgColor']) ? $attributes['iconBgColor'] : '#00ACF2';
$heading_color = isset($attributes['headingColor']) ? $attributes['headingColor'] : '#00668F';

$heading_tag = in_array($heading_level, ['h1', 'h2', 'h3', 'h4']) ? $heading_level : 'h2';
?>

<div class="heading-with-icon">
    <div class="heading-icon-wrapper" style="background: <?php echo esc_attr($icon_bg_color); ?>;">
        <?php if ($icon_type === 'emoji') : ?>
            <span class="heading-icon-emoji"><?php echo esc_html($icon_value); ?></span>
        <?php elseif ($icon_type === 'image' && !empty($icon_value)) : ?>
            <img src="<?php echo esc_url($icon_value); ?>" alt="" class="heading-icon-image">
        <?php elseif ($icon_type === 'svg') : ?>
            <div class="heading-icon-svg"><?php echo wp_kses_post($icon_value); ?></div>
        <?php endif; ?>
    </div>
    <<?php echo $heading_tag; ?> style="color: <?php echo esc_attr($heading_color); ?>;">
        <?php echo wp_kses_post($heading_text); ?>
    </<?php echo $heading_tag; ?>>
</div>
