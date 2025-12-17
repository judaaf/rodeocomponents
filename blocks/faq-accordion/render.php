<?php
$faqs = isset($attributes['faqs']) ? $attributes['faqs'] : array(
    array('question' => 'How often should I visit the dentist?', 'answer' => 'We recommend visiting every six months for routine checkups and cleanings.'),
    array('question' => 'Do you accept insurance?', 'answer' => 'Yes, we accept most major dental insurance plans.')
);
$block_id = 'faq-' . uniqid();
?>

<div class="faq-section" id="<?php echo esc_attr($block_id); ?>">
    <?php foreach ($faqs as $index => $faq) : ?>
        <div class="faq-item">
            <button class="faq-question">
                <?php echo wp_kses_post($faq['question']); ?>
                <span class="faq-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"/>
                    </svg>
                </span>
            </button>
            <div class="faq-answer">
                <div class="faq-answer-content">
                    <p><?php echo wp_kses_post($faq['answer']); ?></p>
                </div>
            </div>
        </div>
    <?php endforeach; ?>
</div>

<script>
(function() {
    var faqSection = document.getElementById('<?php echo esc_js($block_id); ?>');
    if (!faqSection) return;
    
    var questions = faqSection.querySelectorAll('.faq-question');
    questions.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var item = this.parentElement;
            var wasActive = item.classList.contains('active');
            
            faqSection.querySelectorAll('.faq-item').forEach(function(i) {
                i.classList.remove('active');
            });
            
            if (!wasActive) {
                item.classList.add('active');
            }
        });
    });
})();
</script>
