<?php
$quote = isset($attributes['quote']) ? $attributes['quote'] : 'The team made my daughter feel so comfortable. She actually asked when we could go back!';
$author = isset($attributes['author']) ? $attributes['author'] : '— Sarah M., Patient Parent';
?>

<blockquote class="rodeo-blockquote">
    <p><?php echo wp_kses_post($quote); ?></p>
    <cite><?php echo esc_html($author); ?></cite>
</blockquote>
