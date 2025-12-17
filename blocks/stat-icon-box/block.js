(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls } = blockEditor;
    const { PanelBody, TextControl } = components;
    
    registerBlockType('rodeo/stat-icon-box', {
        title: 'Stat Icon Box',
        icon: 'chart-line',
        category: 'rodeo-blocks',
        attributes: {
            icon: { type: 'string', default: '😊' },
            number: { type: 'string', default: '98%' },
            label: { type: 'string', default: 'Patient satisfaction rate' }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'Stat Settings', initialOpen: true },
                        el(TextControl, { label: 'Icon', value: attributes.icon, onChange: (v) => setAttributes({ icon: v }) }),
                        el(TextControl, { label: 'Number', value: attributes.number, onChange: (v) => setAttributes({ number: v }) }),
                        el(TextControl, { label: 'Label', value: attributes.label, onChange: (v) => setAttributes({ label: v }) })
                    )
                ),
                
                el('div', { className: 'stat-icon-box-preview', style: { background: 'linear-gradient(135deg, #00ACF2, #0092CC)', borderRadius: '18px', padding: '28px', margin: '30px 0', display: 'flex', alignItems: 'center', gap: '24px', fontFamily: 'Barlow Condensed, sans-serif' }},
                    el('div', { style: { width: '80px', height: '80px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', flexShrink: '0' }}, attributes.icon),
                    el('div', { style: { flex: 1 }},
                        el('div', { style: { fontSize: '48px', fontWeight: '800', color: 'white', marginBottom: '4px', lineHeight: 1 }}, attributes.number),
                        el('div', { style: { fontSize: '18px', color: 'rgba(255,255,255,0.9)' }}, attributes.label)
                    )
                )
            ];
        },
        save: function() { return null; }
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);
