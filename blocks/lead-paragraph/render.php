<?php
$content = isset($attributes['content']) ? $attributes['content'] : 'This is a lead paragraph. It\'s larger and bolder to emphasize important introductory text.';
?>

<p class="lead-paragraph"><?php echo wp_kses_post($content); ?></p>
