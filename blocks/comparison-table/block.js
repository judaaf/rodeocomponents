(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls, RichText } = blockEditor;
    const { PanelBody, Button, IconButton } = components;
    
    registerBlockType('rodeo/comparison-table', {
        title: 'Comparison Table',
        icon: 'editor-table',
        category: 'rodeo-blocks',
        attributes: {
            rows: {
                type: 'array',
                default: [
                    { feature: 'Routine Checkups', basic: 'Every 12 months', premium: 'Every 6 months' },
                    { feature: 'X-Rays Included', basic: '1 per year', premium: 'Unlimited' },
                    { feature: 'Emergency Care', basic: 'Business hours', premium: '24/7 access' }
                ]
            }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            function updateRow(index, key, value) {
                const newRows = [...attributes.rows];
                newRows[index][key] = value;
                setAttributes({ rows: newRows });
            }
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'Table Rows', initialOpen: true },
                        el('p', {}, attributes.rows.length + ' rows'),
                        el(Button, { isPrimary: true, onClick: () => setAttributes({ rows: [...attributes.rows, { feature: 'New Feature', basic: 'Basic option', premium: 'Premium option' }] }) }, '+ Add Row')
                    )
                ),
                
                el('div', { className: 'comparison-table-preview', style: { margin: '30px 0', fontFamily: 'Barlow Condensed, sans-serif' }},
                    el('div', { style: { display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '2px', background: '#e5e7eb', borderRadius: '18px', overflow: 'hidden' }},
                        el('div', { style: { background: '#f8fafc', padding: '18px 24px', fontWeight: '800', fontSize: '16px', color: '#00668F', textTransform: 'uppercase' }}, 'Feature'),
                        el('div', { style: { background: 'linear-gradient(135deg, #e5e7eb, #cbd5e1)', padding: '18px 24px', fontWeight: '800', fontSize: '16px', color: '#00668F', textTransform: 'uppercase', textAlign: 'center' }}, 'Basic'),
                        el('div', { style: { background: 'linear-gradient(135deg, #FFDA56, #FFC700)', padding: '18px 24px', fontWeight: '800', fontSize: '16px', color: '#00668F', textTransform: 'uppercase', textAlign: 'center' }}, 'Premium'),
                        
                        attributes.rows.map(function(row, index) {
                            return [
                                el(RichText, { key: 'f' + index, tagName: 'div', value: row.feature, onChange: (v) => updateRow(index, 'feature', v), style: { background: 'white', padding: '16px 24px', fontSize: '16px', fontWeight: '600', color: '#00668F', position: 'relative' }}),
                                el('div', { key: 'b' + index, style: { background: 'white', padding: '16px 24px', position: 'relative' }},
                                    el(RichText, { tagName: 'div', value: row.basic, onChange: (v) => updateRow(index, 'basic', v), style: { fontSize: '15px', color: '#64748b', textAlign: 'center' }})
                                ),
                                el('div', { key: 'p' + index, style: { background: 'white', padding: '16px 24px', position: 'relative' }},
                                    el(RichText, { tagName: 'div', value: row.premium, onChange: (v) => updateRow(index, 'premium', v), style: { fontSize: '15px', color: '#00668F', fontWeight: '600', textAlign: 'center' }}),
                                    el(IconButton, { icon: 'trash', label: 'Remove', onClick: () => setAttributes({ rows: attributes.rows.filter((_, i) => i !== index) }), style: { position: 'absolute', top: '8px', right: '8px', color: '#F1370F' }})
                                )
                            ];
                        })
                    )
                )
            ];
        },
        save: function() { return null; }
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);
