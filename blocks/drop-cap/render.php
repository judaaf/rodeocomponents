<?php
$content = isset($attributes['content']) ? $attributes['content'] : 'Drop cap paragraph for editorial style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
?>

<p class="drop-cap-paragraph"><?php echo wp_kses_post($content); ?></p>
