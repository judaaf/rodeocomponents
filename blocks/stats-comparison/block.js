(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls } = blockEditor;
    const { PanelBody, TextControl } = components;
    
    registerBlockType('rodeo/stats-comparison', {
        title: 'Stats Comparison',
        icon: 'leftright',
        category: 'rodeo-blocks',
        attributes: {
            badNumber: { type: 'string', default: '72%' },
            badLabel: { type: 'string', default: 'Without Checkups' },
            goodNumber: { type: 'string', default: '23%' },
            goodLabel: { type: 'string', default: 'With Checkups' }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'Comparison Settings', initialOpen: true },
                        el(TextControl, { label: 'Bad Number', value: attributes.badNumber, onChange: (v) => setAttributes({ badNumber: v }) }),
                        el(TextControl, { label: 'Bad Label', value: attributes.badLabel, onChange: (v) => setAttributes({ badLabel: v }) }),
                        el(TextControl, { label: 'Good Number', value: attributes.goodNumber, onChange: (v) => setAttributes({ goodNumber: v }) }),
                        el(TextControl, { label: 'Good Label', value: attributes.goodLabel, onChange: (v) => setAttributes({ goodLabel: v }) })
                    )
                ),
                
                el('div', { className: 'stats-comparison-preview', style: { display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '20px', alignItems: 'center', margin: '30px 0', padding: '28px', background: '#f8fafc', borderRadius: '18px', fontFamily: 'Barlow Condensed, sans-serif' }},
                    el('div', { style: { textAlign: 'center', padding: '20px' }},
                        el('div', { style: { fontSize: '48px', lineHeight: 1, marginBottom: '8px', color: '#F1370F' }}, attributes.badNumber),
                        el('div', { style: { fontSize: '15px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}, attributes.badLabel)
                    ),
                    el('div', { style: { fontSize: '24px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase' }}, 'VS'),
                    el('div', { style: { textAlign: 'center', padding: '20px' }},
                        el('div', { style: { fontSize: '48px', lineHeight: 1, marginBottom: '8px', color: '#10b981' }}, attributes.goodNumber),
                        el('div', { style: { fontSize: '15px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}, attributes.goodLabel)
                    )
                )
            ];
        },
        save: function() { return null; }
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);
