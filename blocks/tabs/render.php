<?php
$tabs = isset($attributes['tabs']) ? $attributes['tabs'] : array(
    array('title' => 'Overview', 'content' => 'General information goes here.'),
    array('title' => 'Benefits', 'content' => 'Key benefits and advantages.'),
    array('title' => 'FAQs', 'content' => 'Common questions answered.')
);
$block_id = 'tabs-' . uniqid();
?>
<div class="tabs-component" id="<?php echo esc_attr($block_id); ?>">
    <div class="tabs-nav">
        <?php foreach ($tabs as $index => $tab) : ?>
            <button class="tab-btn<?php echo $index === 0 ? ' active' : ''; ?>" data-tab="<?php echo $index; ?>">
                <?php echo esc_html($tab['title']); ?>
            </button>
        <?php endforeach; ?>
    </div>
    <div class="tabs-content">
        <?php foreach ($tabs as $index => $tab) : ?>
            <div class="tab-panel<?php echo $index === 0 ? ' active' : ''; ?>" data-panel="<?php echo $index; ?>">
                <?php echo wp_kses_post($tab['content']); ?>
            </div>
        <?php endforeach; ?>
    </div>
</div>

<script>
(function() {
    var tabsComponent = document.getElementById('<?php echo esc_js($block_id); ?>');
    if (!tabsComponent) return;
    
    var tabBtns = tabsComponent.querySelectorAll('.tab-btn');
    tabBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var tabIndex = this.getAttribute('data-tab');
            
            tabsComponent.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
            tabsComponent.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
            
            this.classList.add('active');
            tabsComponent.querySelector('.tab-panel[data-panel="' + tabIndex + '"]').classList.add('active');
        });
    });
})();
</script>
