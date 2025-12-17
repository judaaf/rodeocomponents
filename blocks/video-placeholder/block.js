(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls } = blockEditor;
    const { PanelBody, TextControl } = components;
    
    registerBlockType('rodeo/video-placeholder', {
        title: 'Video Placeholder',
        icon: 'video-alt3',
        category: 'rodeo-blocks',
        attributes: {
            videoUrl: { type: 'string', default: '' },
            label: { type: 'string', default: 'Watch Video' }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'Video Settings', initialOpen: true },
                        el(TextControl, { label: 'Video URL', value: attributes.videoUrl, onChange: (v) => setAttributes({ videoUrl: v }) }),
                        el(TextControl, { label: 'Label', value: attributes.label, onChange: (v) => setAttributes({ label: v }) })
                    )
                ),
                
                el('div', { className: 'video-placeholder-preview', style: { aspectRatio: '16/9', background: 'linear-gradient(135deg, #00668F, #004D6B)', borderRadius: '18px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', margin: '30px 0' }},
                    el('div', { style: { width: '90px', height: '90px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 16px 48px rgba(0,0,0,0.15)' }},
                        el('svg', { viewBox: '0 0 24 24', style: { width: '36px', height: '36px', fill: '#F1370F', marginLeft: '6px' }},
                            el('polygon', { points: '5 3 19 12 5 21 5 3' })
                        )
                    ),
                    el('div', { style: { color: 'white', fontSize: '18px', fontWeight: '700', marginTop: '16px', textTransform: 'uppercase', fontFamily: 'Barlow Condensed, sans-serif' }}, attributes.label)
                )
            ];
        },
        save: function() { return null; }
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);
