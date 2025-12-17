<?php
$type = isset($attributes['type']) ? $attributes['type'] : 'success';
$message = isset($attributes['message']) ? $attributes['message'] : 'Your callout message goes here.';

$types = array(
    'success' => array('label' => 'Success', 'icon' => '✅', 'bgColor' => 'linear-gradient(135deg, #ECFDF5, #D1FAE5)', 'borderColor' => '#10b981', 'textColor' => '#065f46'),
    'warning' => array('label' => 'Warning', 'icon' => '⚠️', 'bgColor' => 'linear-gradient(135deg, #FEF2F2, #FECACA)', 'borderColor' => '#F1370F', 'textColor' => '#991b1b'),
    'tip' => array('label' => 'Pro Tip', 'icon' => '💡', 'bgColor' => 'linear-gradient(135deg, #FFFBEB, #FEF3C7)', 'borderColor' => '#FFDA56', 'textColor' => '#92400e'),
    'info' => array('label' => 'Info', 'icon' => 'ℹ️', 'bgColor' => 'linear-gradient(135deg, #EEF2FF, #E0E7FF)', 'borderColor' => '#818CF8', 'textColor' => '#3730a3'),
    'note' => array('label' => 'Note', 'icon' => '📝', 'bgColor' => 'linear-gradient(135deg, #F9FAFB, #F3F4F6)', 'borderColor' => '#9CA3AF', 'textColor' => '#374151'),
    'takeaway' => array('label' => 'Key Takeaway', 'icon' => '💡', 'bgColor' => 'linear-gradient(135deg, #DBEAFE, #BFDBFE)', 'borderColor' => '#00ACF2', 'textColor' => '#1e40af')
);

$config = isset($types[$type]) ? $types[$type] : $types['success'];
?>

<div class="callout-box callout-<?php echo esc_attr($type); ?>" style="background: <?php echo esc_attr($config['bgColor']); ?>; border-color: <?php echo esc_attr($config['borderColor']); ?>;">
    <div class="callout-header">
        <span class="callout-icon"><?php echo esc_html($config['icon']); ?></span>
        <strong style="color: <?php echo esc_attr($config['textColor']); ?>;"><?php echo esc_html($config['label']); ?></strong>
    </div>
    <div class="callout-message" style="color: <?php echo esc_attr($config['textColor']); ?>;">
        <?php echo wp_kses_post($message); ?>
    </div>
</div>
