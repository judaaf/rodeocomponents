(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls } = blockEditor;
    const { PanelBody, TextControl, Button, IconButton } = components;
    
    registerBlockType('rodeo/trust-bar', {
        title: 'Trust Bar',
        icon: 'shield',
        category: 'rodeo-blocks',
        attributes: {
            items: {
                type: 'array',
                default: [
                    { icon: '✅', label: 'Verified' },
                    { icon: '🏆', label: 'Award Winner' },
                    { icon: '⭐', label: '5-Star Rated' },
                    { icon: '🛡️', label: 'Insured' }
                ]
            }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            function updateItem(index, key, value) {
                const newItems = [...attributes.items];
                newItems[index][key] = value;
                setAttributes({ items: newItems });
            }
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'Trust Items', initialOpen: true },
                        el('p', {}, attributes.items.length + ' items'),
                        el(Button, { isPrimary: true, onClick: () => setAttributes({ items: [...attributes.items, { icon: '✅', label: 'New Item' }] }) }, '+ Add Item')
                    )
                ),
                
                el('div', { className: 'trust-bar-preview', style: { background: '#f8fafc', border: '2px solid #e5e7eb', borderRadius: '18px', padding: '24px', margin: '30px 0', display: 'grid', gridTemplateColumns: 'repeat(' + attributes.items.length + ', 1fr)', gap: '20px', fontFamily: 'Barlow Condensed, sans-serif' }},
                    attributes.items.map(function(item, index) {
                        return el('div', { key: index, style: { textAlign: 'center', position: 'relative' }},
                            el(IconButton, { icon: 'trash', label: 'Remove', onClick: () => setAttributes({ items: attributes.items.filter((_, i) => i !== index) }), style: { position: 'absolute', top: '-10px', right: '0', color: '#F1370F' }}),
                            el(TextControl, { label: 'Icon', value: item.icon, onChange: (v) => updateItem(index, 'icon', v), style: { fontSize: '32px', textAlign: 'center', marginBottom: '8px' }}),
                            el(TextControl, { label: 'Label', value: item.label, onChange: (v) => updateItem(index, 'label', v), style: { fontSize: '14px', fontWeight: '700', color: '#00668F', textTransform: 'uppercase' }})
                        );
                    })
                )
            ];
        },
        save: function() { return null; }
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);
