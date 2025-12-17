(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { MediaUpload, InspectorControls, RichText } = blockEditor;
    const { PanelBody, Button, SelectControl } = components;
    
    registerBlockType('rodeo/image-block', {
        title: 'Image Block',
        icon: 'format-image',
        category: 'rodeo-blocks',
        attributes: {
            imageUrl: { type: 'string', default: '' },
            caption: { type: 'string', default: '' },
            alignment: { type: 'string', default: 'center' }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            const alignments = {
                'left': 'flex-start',
                'center': 'center',
                'right': 'flex-end'
            };
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'Image Settings', initialOpen: true },
                        el(SelectControl, {
                            label: 'Alignment',
                            value: attributes.alignment,
                            options: [
                                { label: 'Left', value: 'left' },
                                { label: 'Center', value: 'center' },
                                { label: 'Right', value: 'right' }
                            ],
                            onChange: (v) => setAttributes({ alignment: v })
                        })
                    )
                ),
                
                el('div', { className: 'image-block-preview', style: { margin: '30px 0', display: 'flex', flexDirection: 'column', alignItems: alignments[attributes.alignment], fontFamily: 'Barlow Condensed, sans-serif' }},
                    attributes.imageUrl ? 
                        el('div', { style: { position: 'relative', maxWidth: '100%' }},
                            el('img', { src: attributes.imageUrl, style: { width: '100%', borderRadius: '18px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}),
                            el(Button, { onClick: () => setAttributes({ imageUrl: '' }), isDestructive: true, style: { position: 'absolute', top: '10px', right: '10px' }}, 'Remove')
                        ) :
                        el(MediaUpload, { 
                            onSelect: (media) => setAttributes({ imageUrl: media.url }), 
                            allowedTypes: ['image'], 
                            value: attributes.imageUrl, 
                            render: ({ open }) => el(Button, { onClick: open, isPrimary: true, style: { padding: '60px 40px', fontSize: '16px' }}, '📷 Upload Image') 
                        }),
                    attributes.imageUrl && el(RichText, { 
                        tagName: 'p', 
                        value: attributes.caption, 
                        onChange: (v) => setAttributes({ caption: v }), 
                        placeholder: 'Add caption (optional)...', 
                        style: { marginTop: '12px', fontSize: '15px', color: '#64748b', fontStyle: 'italic', textAlign: attributes.alignment }
                    })
                )
            ];
        },
        save: function() { return null; }
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);
