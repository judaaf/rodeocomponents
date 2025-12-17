<?php
$pros = isset($attributes['pros']) ? $attributes['pros'] : array('Benefit one', 'Benefit two');
$cons = isset($attributes['cons']) ? $attributes['cons'] : array('Drawback one', 'Drawback two');
?>
<div class="pros-cons">
    <div class="pros-box">
        <div class="pros-cons-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <polyline points="20 6 9 17 4 12"/>
            </svg>
            Pros
        </div>
        <ul class="pros-cons-list">
            <?php foreach ($pros as $pro) : ?>
                <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <?php echo wp_kses_post($pro); ?>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
    <div class="cons-box">
        <div class="pros-cons-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
            Cons
        </div>
        <ul class="pros-cons-list">
            <?php foreach ($cons as $con) : ?>
                <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                    <?php echo wp_kses_post($con); ?>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</div>
