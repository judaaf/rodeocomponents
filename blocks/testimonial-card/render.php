<?php
$avatar = isset($attributes['avatar']) ? $attributes['avatar'] : '😊';
$quote = isset($attributes['quote']) ? $attributes['quote'] : 'Best dental experience I\'ve ever had!';
$author_name = isset($attributes['authorName']) ? $attributes['authorName'] : 'Michael R.';
$author_info = isset($attributes['authorInfo']) ? $attributes['authorInfo'] : 'Patient since 2022';
?>

<div class="testimonial-card">
    <div class="testimonial-stars">
        <?php for ($i = 0; $i < 5; $i++) : ?>
            <svg viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
        <?php endfor; ?>
    </div>
    <p class="testimonial-text"><?php echo wp_kses_post($quote); ?></p>
    <div class="testimonial-author">
        <div class="testimonial-avatar"><?php echo esc_html($avatar); ?></div>
        <div class="testimonial-info">
            <h4><?php echo esc_html($author_name); ?></h4>
            <p><?php echo esc_html($author_info); ?></p>
        </div>
    </div>
</div>
