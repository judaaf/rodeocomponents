<?php
$faqs = isset($attributes['faqs']) ? $attributes['faqs'] : array(
    array('icon' => '❓', 'question' => 'How long are appointments?', 'answer' => 'Most routine visits take 30-60 minutes.'),
    array('icon' => '❓', 'question' => 'Do you see children?', 'answer' => 'Yes! We love kids and make visits fun.')
);
$count = count($faqs);
$columns = min($count, 2);
?>
<div class="faq-grid faq-grid-<?php echo esc_attr($columns); ?>">
    <?php foreach ($faqs as $faq) : ?>
        <div class="faq-grid-item">
            <h4><span><?php echo esc_html($faq['icon']); ?></span> <?php echo wp_kses_post($faq['question']); ?></h4>
            <p><?php echo wp_kses_post($faq['answer']); ?></p>
        </div>
    <?php endforeach; ?>
</div>
