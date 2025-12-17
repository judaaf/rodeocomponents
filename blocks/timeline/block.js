(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls, RichText } = blockEditor;
    const { PanelBody, TextControl, Button, IconButton } = components;
    
    registerBlockType('rodeo/timeline', {
        title: 'Timeline',
        icon: 'clock',
        category: 'rodeo-blocks',
        attributes: {
            items: {
                type: 'array',
                default: [
                    { date: 'Day 1', title: 'Consultation', description: 'Initial meeting to discuss goals.' },
                    { date: 'Week 2', title: 'Treatment', description: 'Begin the treatment process.' },
                    { date: 'Week 4', title: 'Complete', description: 'Enjoy your new smile!' }
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
                const newItems = [...attributes.items, { date: 'New Date', title: 'New Event', description: 'Description here.' }];
                setAttributes({ items: newItems });
            }
            
            function removeItem(index) {
                const newItems = attributes.items.filter((item, i) => i !== index);
                setAttributes({ items: newItems });
            }
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'Timeline Items', initialOpen: true },
                        el('p', {}, attributes.items.length + ' timeline items'),
                        el(Button, {
                            isPrimary: true,
                            onClick: addItem
                        }, '+ Add Item')
                    )
                ),
                
                el('div', {
                    className: 'timeline-preview',
                    style: {
                        position: 'relative',
                        margin: '40px 0',
                        paddingLeft: '40px',
                        fontFamily: 'Barlow Condensed, sans-serif'
                    }
                },
                    el('div', {
                        style: {
                            position: 'absolute',
                            left: '15px',
                            top: 0,
                            bottom: 0,
                            width: '4px',
                            background: 'linear-gradient(180deg, #00ACF2, #00668F)',
                            borderRadius: '2px'
                        }
                    }),
                    attributes.items.map(function(item, index) {
                        return el('div', {
                            key: index,
                            style: {
                                position: 'relative',
                                marginBottom: '30px',
                                padding: '20px 24px',
                                background: '#f8fafc',
                                borderRadius: '12px',
                                border: '2px solid #e5e7eb'
                            }
                        },
                            el('div', {
                                style: {
                                    position: 'absolute',
                                    left: '-33px',
                                    top: '24px',
                                    width: '18px',
                                    height: '18px',
                                    background: 'white',
                                    border: '4px solid #00ACF2',
                                    borderRadius: '50%'
                                }
                            }),
                            el(IconButton, {
                                icon: 'trash',
                                label: 'Remove',
                                onClick: () => removeItem(index),
                                style: { 
                                    position: 'absolute', 
                                    top: '10px', 
                                    right: '10px',
                                    color: '#F1370F'
                                }
                            }),
                            el(TextControl, {
                                label: 'Date',
                                value: item.date,
                                onChange: (value) => updateItem(index, 'date', value),
                                style: {
                                    fontSize: '13px',
                                    fontWeight: '700',
                                    color: '#00ACF2',
                                    textTransform: 'uppercase',
                                    marginBottom: '8px'
                                }
                            }),
                            el(RichText, {
                                tagName: 'h4',
                                value: item.title,
                                onChange: (value) => updateItem(index, 'title', value),
                                placeholder: 'Event title...',
                                style: {
                                    fontSize: '19px',
                                    fontWeight: '800',
                                    color: '#00668F',
                                    marginBottom: '8px'
                                }
                            }),
                            el(RichText, {
                                tagName: 'p',
                                value: item.description,
                                onChange: (value) => updateItem(index, 'description', value),
                                placeholder: 'Event description...',
                                style: {
                                    fontSize: '16px',
                                    color: '#00668F',
                                    margin: 0
                                }
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
