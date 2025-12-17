<?php
$image_url = isset($attributes['imageUrl']) ? $attributes['imageUrl'] : '';
$caption = isset($attributes['caption']) ? $attributes['caption'] : '';
$alignment = isset($attributes['alignment']) ? $attributes['alignment'] : 'center';
?>
<?php if ($image_url) : ?>
<div class="image-block image-block-<?php echo esc_attr($alignment); ?>">
    <img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($caption); ?>">
    <?php if ($caption) : ?>
        <p class="image-caption"><?php echo wp_kses_post($caption); ?></p>
    <?php endif; ?>
</div>
<?php endif; ?>
