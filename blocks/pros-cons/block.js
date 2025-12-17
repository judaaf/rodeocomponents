(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls, RichText } = blockEditor;
    const { PanelBody, Button, IconButton } = components;
    
    registerBlockType('rodeo/pros-cons', {
        title: 'Pros & Cons',
        icon: 'list-view',
        category: 'rodeo-blocks',
        attributes: {
            pros: { type: 'array', default: ['Benefit one', 'Benefit two'] },
            cons: { type: 'array', default: ['Drawback one', 'Drawback two'] }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            function updatePros(index, value) {
                const newPros = [...attributes.pros];
                newPros[index] = value;
                setAttributes({ pros: newPros });
            }
            
            function updateCons(index, value) {
                const newCons = [...attributes.cons];
                newCons[index] = value;
                setAttributes({ cons: newCons });
            }
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'Pros & Cons', initialOpen: true },
                        el(Button, { isPrimary: true, onClick: () => setAttributes({ pros: [...attributes.pros, 'New pro'] }) }, '+ Add Pro'),
                        el(Button, { isPrimary: true, onClick: () => setAttributes({ cons: [...attributes.cons, 'New con'] }), style: { marginTop: '10px' } }, '+ Add Con')
                    )
                ),
                
                el('div', { className: 'pros-cons-preview', style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '30px 0', fontFamily: 'Barlow Condensed, sans-serif' }},
                    el('div', { style: { background: 'linear-gradient(135deg, #ECFDF5, #D1FAE5)', border: '2px solid #10b981', borderRadius: '18px', padding: '24px' }},
                        el('div', { style: { fontSize: '18px', fontWeight: '800', textTransform: 'uppercase', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#059669' }}, '✓ Pros'),
                        el('ul', { style: { listStyle: 'none', padding: 0, margin: 0 }},
                            attributes.pros.map(function(pro, index) {
                                return el('li', { key: index, style: { display: 'flex', gap: '10px', marginBottom: '12px' }},
                                    el('span', { style: { color: '#10b981' }}, '✓'),
                                    el(RichText, { tagName: 'span', value: pro, onChange: (v) => updatePros(index, v), style: { color: '#065f46', fontWeight: '600', flex: 1 }}),
                                    el(IconButton, { icon: 'trash', label: 'Remove', onClick: () => setAttributes({ pros: attributes.pros.filter((_, i) => i !== index) }), style: { color: '#F1370F' }})
                                );
                            })
                        )
                    ),
                    el('div', { style: { background: 'linear-gradient(135deg, #FEF2F2, #FECACA)', border: '2px solid #F1370F', borderRadius: '18px', padding: '24px' }},
                        el('div', { style: { fontSize: '18px', fontWeight: '800', textTransform: 'uppercase', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#D4310C' }}, '✗ Cons'),
                        el('ul', { style: { listStyle: 'none', padding: 0, margin: 0 }},
                            attributes.cons.map(function(con, index) {
                                return el('li', { key: index, style: { display: 'flex', gap: '10px', marginBottom: '12px' }},
                                    el('span', { style: { color: '#F1370F' }}, '✗'),
                                    el(RichText, { tagName: 'span', value: con, onChange: (v) => updateCons(index, v), style: { color: '#D4310C', fontWeight: '600', flex: 1 }}),
                                    el(IconButton, { icon: 'trash', label: 'Remove', onClick: () => setAttributes({ cons: attributes.cons.filter((_, i) => i !== index) }), style: { color: '#F1370F' }})
                                );
                            })
                        )
                    )
                )
            ];
        },
        save: function() { return null; }
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);
