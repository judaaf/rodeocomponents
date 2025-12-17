<?php
$content = isset($attributes['content']) ? $attributes['content'] : 'This text is highlighted for emphasis';
$type = isset($attributes['highlightType']) ? $attributes['highlightType'] : 'yellow';
?>

<span class="highlight highlight-<?php echo esc_attr($type); ?>"><?php echo wp_kses_post($content); ?></span>
