<?php
$headers = isset($attributes['headers']) ? $attributes['headers'] : array('Service', 'Time', 'Cost');
$rows = isset($attributes['rows']) ? $attributes['rows'] : array(
    array('Cleaning', '1 hour', '$120'),
    array('Filling', '45 min', '$180'),
    array('Crown', '2 hours', '$900')
);
?>
<div class="data-table">
    <table>
        <thead>
            <tr>
                <?php foreach ($headers as $header) : ?>
                    <th><?php echo esc_html($header); ?></th>
                <?php endforeach; ?>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($rows as $rowIndex => $row) : ?>
                <tr>
                    <?php foreach ($row as $cell) : ?>
                        <td><?php echo wp_kses_post($cell); ?></td>
                    <?php endforeach; ?>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>
