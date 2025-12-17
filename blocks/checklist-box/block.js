(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls, RichText } = blockEditor;
    const { PanelBody, Button, IconButton } = components;
    
    registerBlockType('rodeo/checklist-box', {
        title: 'Checklist Box',
        icon: 'yes-alt',
        category: 'rodeo-blocks',
        attributes: {
            title: { type: 'string', default: 'Checklist Box' },
            items: {
                type: 'array',
                default: [
                    { title: 'Item One', description: 'Description of first item' },
                    { title: 'Item Two', description: 'Description of second item' },
                    { title: 'Item Three', description: 'Description of third item' }
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
            
            function addItem() {
                setAttributes({ items: [...attributes.items, { title: 'New Item', description: 'Description' }] });
            }
            
            function removeItem(index) {
                setAttributes({ items: attributes.items.filter((_, i) => i !== index) });
            }
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'Checklist Settings', initialOpen: true },
                        el('p', {}, attributes.items.length + ' items'),
                        el(Button, { isPrimary: true, onClick: addItem }, '+ Add Item')
                    )
                ),
                
                el('div', { className: 'checklist-box-preview', style: { background: '#f8fafc', border: '2px solid #e5e7eb', borderRadius: '18px', padding: '28px 32px', margin: '30px 0', fontFamily: 'Barlow Condensed, sans-serif' }},
                    el(RichText, { tagName: 'div', value: attributes.title, onChange: (v) => setAttributes({ title: v }), placeholder: 'Checklist title...', style: { fontSize: '22px', fontWeight: '800', color: '#00668F', textTransform: 'uppercase', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}),
                    el('ul', { style: { listStyle: 'none', padding: 0, margin: 0 }},
                        attributes.items.map(function(item, index) {
                            return el('li', { key: index, style: { display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '14px 0', borderBottom: '1px solid #e5e7eb' }},
                                el('div', { style: { width: '28px', height: '28px', background: 'linear-gradient(135deg, #10b981, #059669)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', marginTop: '2px' }}, '✓'),
                                el('div', { style: { flex: 1 }},
                                    el(RichText, { tagName: 'strong', value: item.title, onChange: (v) => updateItem(index, 'title', v), placeholder: 'Item title...', style: { display: 'block', color: '#00668F', marginBottom: '4px' }}),
                                    el(RichText, { tagName: 'span', value: item.description, onChange: (v) => updateItem(index, 'description', v), placeholder: 'Description...', style: { color: '#64748b', fontWeight: '500' }})
                                ),
                                el(IconButton, { icon: 'trash', label: 'Remove', onClick: () => removeItem(index), style: { color: '#F1370F' }})
                            );
                        })
                    )
                )
            ];
        },
        save: function() { return null; }
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);
