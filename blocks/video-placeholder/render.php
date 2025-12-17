<?php
$video_url = isset($attributes['videoUrl']) ? $attributes['videoUrl'] : '';
$label = isset($attributes['label']) ? $attributes['label'] : 'Watch Video';

// Extract YouTube/Vimeo ID from URL
$video_id = '';
$video_type = '';

if (preg_match('/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/', $video_url, $matches)) {
    $video_id = $matches[1];
    $video_type = 'youtube';
} elseif (preg_match('/vimeo\.com\/(\d+)/', $video_url, $matches)) {
    $video_id = $matches[1];
    $video_type = 'vimeo';
}
?>

<?php if ($video_id && $video_type) : ?>
    <div class="video-embed-wrapper">
        <?php if ($video_type === 'youtube') : ?>
            <iframe 
                src="https://www.youtube.com/embed/<?php echo esc_attr($video_id); ?>" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                class="video-iframe">
            </iframe>
        <?php elseif ($video_type === 'vimeo') : ?>
            <iframe 
                src="https://player.vimeo.com/video/<?php echo esc_attr($video_id); ?>" 
                frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowfullscreen
                class="video-iframe">
            </iframe>
        <?php endif; ?>
    </div>
<?php elseif ($video_url) : ?>
    <!-- Fallback for other URLs -->
    <div class="video-placeholder" onclick="window.open('<?php echo esc_js($video_url); ?>', '_blank')">
        <span class="play-btn">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </span>
        <span class="video-placeholder-text"><?php echo esc_html($label); ?></span>
    </div>
<?php else : ?>
    <!-- No URL - show placeholder -->
    <div class="video-placeholder">
        <span class="play-btn">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </span>
        <span class="video-placeholder-text"><?php echo esc_html($label); ?></span>
    </div>
<?php endif; ?>
