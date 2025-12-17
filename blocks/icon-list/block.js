(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls, RichText } = blockEditor;
    const { PanelBody, SelectControl, Button, IconButton } = components;
    
    registerBlockType('rodeo/icon-list', {
        title: 'Icon List',
        icon: 'list-view',
        category: 'rodeo-blocks',
        attributes: {
            items: {
                type: 'array',
                default: [
                    { text: 'Green check for benefits', iconType: 'check' },
                    { text: 'Blue icon for info', iconType: 'info' },
                    { text: 'Red icon for warnings', iconType: 'warning' }
                ]
            }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            const iconTypes = {
                'check': { color: 'linear-gradient(135deg, #10b981, #059669)', icon: '✓' },
                'info': { color: 'linear-gradient(135deg, #00ACF2, #0092CC)', icon: 'i' },
                'warning': { color: 'linear-gradient(135deg, #F1370F, #D4310C)', icon: '!' },
                'star': { color: 'linear-gradient(135deg, #FFDA56, #FFC700)', icon: '★' }
            };
            
            function updateItem(index, key, value) {
                const newItems = [...attributes.items];
                newItems[index][key] = value;
                setAttributes({ items: newItems });
            }
            
            function addItem() {
                const newItems = [...attributes.items, { text: 'New item', iconType: 'check' }];
                setAttributes({ items: newItems });
            }
            
            function removeItem(index) {
                const newItems = attributes.items.filter((item, i) => i !== index);
                setAttributes({ items: newItems });
            }
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'List Items', initialOpen: true },
                        el('p', {}, attributes.items.length + ' items in list'),
                        el(Button, {
                            isPrimary: true,
                            onClick: addItem
                        }, '+ Add Item')
                    )
                ),
                
                el('ul', {
                    className: 'icon-list-preview',
                    style: {
                        listStyle: 'none',
                        padding: 0,
                        margin: '20px 0',
                        fontFamily: 'Barlow Condensed, sans-serif'
                    }
                },
                    attributes.items.map(function(item, index) {
                        const iconStyle = iconTypes[item.iconType];
                        return el('li', {
                            key: index,
                            style: {
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '14px',
                                marginBottom: '16px',
                                fontSize: '18px',
                                padding: '12px',
                                background: '#f9f9f9',
                                borderRadius: '8px'
                            }
                        },
                            el('div', {
                                style: {
                                    width: '32px',
                                    height: '32px',
                                    background: iconStyle.color,
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: '0',
                                    marginTop: '2px',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: '16px'
                                }
                            }, iconStyle.icon),
                            el('div', { style: { flex: 1 }},
                                el(SelectControl, {
                                    value: item.iconType,
                                    options: [
                                        { label: '✓ Check (Green)', value: 'check' },
                                        { label: 'i Info (Blue)', value: 'info' },
                                        { label: '! Warning (Red)', value: 'warning' },
                                        { label: '★ Star (Yellow)', value: 'star' }
                                    ],
                                    onChange: (value) => updateItem(index, 'iconType', value),
                                    style: { marginBottom: '8px' }
                                }),
                                el(RichText, {
                                    tagName: 'span',
                                    value: item.text,
                                    onChange: (value) => updateItem(index, 'text', value),
                                    placeholder: 'Enter list item text...',
                                    style: { fontSize: '18px', color: '#00668F' }
                                })
                            ),
                            el(IconButton, {
                                icon: 'trash',
                                label: 'Remove',
                                onClick: () => removeItem(index),
                                style: { color: '#F1370F' }
                            })
                        );
                    })
                )
            ];
        },
        
        save: function() {
            return null;
        }
    });
})(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor,
    window.wp.components
);
