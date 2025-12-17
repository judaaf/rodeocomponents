(function(blocks, element, blockEditor) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { MediaUpload } = blockEditor;
    const { Button } = wp.components;
    
    registerBlockType('rodeo/before-after', {
        title: 'Before/After',
        icon: 'image-flip-horizontal',
        category: 'rodeo-blocks',
        attributes: {
            beforeImage: { type: 'string', default: '' },
            afterImage: { type: 'string', default: '' }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return el('div', { className: 'before-after-preview', style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '30px 0' }},
                el('div', { style: { position: 'relative' }},
                    el('div', { style: { position: 'absolute', top: '12px', left: '12px', padding: '6px 14px', borderRadius: '50px', fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', background: '#F1370F', color: 'white', zIndex: 2 }}, 'Before'),
                    attributes.beforeImage ? 
                        el('img', { src: attributes.beforeImage, style: { width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '18px' }}) :
                        el(MediaUpload, { onSelect: (media) => setAttributes({ beforeImage: media.url }), allowedTypes: ['image'], value: attributes.beforeImage, render: ({ open }) => el(Button, { onClick: open, isPrimary: true, style: { width: '100%', height: '200px' }}, 'Upload Before Image') })
                ),
                el('div', { style: { position: 'relative' }},
                    el('div', { style: { position: 'absolute', top: '12px', left: '12px', padding: '6px 14px', borderRadius: '50px', fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', background: '#10b981', color: 'white', zIndex: 2 }}, 'After'),
                    attributes.afterImage ? 
                        el('img', { src: attributes.afterImage, style: { width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '18px' }}) :
                        el(MediaUpload, { onSelect: (media) => setAttributes({ afterImage: media.url }), allowedTypes: ['image'], value: attributes.afterImage, render: ({ open }) => el(Button, { onClick: open, isPrimary: true, style: { width: '100%', height: '200px' }}, 'Upload After Image') })
                )
            );
        },
        save: function() { return null; }
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor);
