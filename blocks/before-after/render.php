<?php
$before_image = isset($attributes['beforeImage']) ? $attributes['beforeImage'] : '';
$after_image = isset($attributes['afterImage']) ? $attributes['afterImage'] : '';
?>
<div class="before-after">
    <div class="before-after-item before">
        <?php if ($before_image) : ?>
            <img src="<?php echo esc_url($before_image); ?>" alt="Before">
        <?php else : ?>
            <div style="aspect-ratio: 4/3; background: linear-gradient(135deg, #FEF2F2, #FECACA); border-radius: 18px; display: flex; align-items: center; justify-content: center; font-size: 48px;">😬</div>
        <?php endif; ?>
        <span class="before-after-label">Before</span>
    </div>
    <div class="before-after-item after">
        <?php if ($after_image) : ?>
            <img src="<?php echo esc_url($after_image); ?>" alt="After">
        <?php else : ?>
            <div style="aspect-ratio: 4/3; background: linear-gradient(135deg, #ECFDF5, #D1FAE5); border-radius: 18px; display: flex; align-items: center; justify-content: center; font-size: 48px;">😁</div>
        <?php endif; ?>
        <span class="before-after-label">After</span>
    </div>
</div>
