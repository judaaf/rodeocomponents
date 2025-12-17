(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls, RichText } = blockEditor;
    const { PanelBody, TextControl } = components;
    
    registerBlockType('rodeo/testimonial-card', {
        title: 'Testimonial Card',
        icon: 'format-quote',
        category: 'rodeo-blocks',
        attributes: {
            avatar: {
                type: 'string',
                default: '😊'
            },
            quote: {
                type: 'string',
                default: 'Best dental experience I\'ve ever had! The staff changed everything for me.'
            },
            authorName: {
                type: 'string',
                default: 'Michael R.'
            },
            authorInfo: {
                type: 'string',
                default: 'Patient since 2022'
            }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'Testimonial Settings', initialOpen: true },
                        el(TextControl, {
                            label: 'Avatar (Emoji)',
                            value: attributes.avatar,
                            onChange: (value) => setAttributes({ avatar: value }),
                            help: 'Enter emoji: 😊 👨 👩 🙂'
                        }),
                        el(TextControl, {
                            label: 'Author Name',
                            value: attributes.authorName,
                            onChange: (value) => setAttributes({ authorName: value })
                        }),
                        el(TextControl, {
                            label: 'Author Info',
                            value: attributes.authorInfo,
                            onChange: (value) => setAttributes({ authorInfo: value }),
                            help: 'e.g., Patient since 2022'
                        })
                    )
                ),
                
                el('div', {
                    className: 'testimonial-card-preview',
                    style: {
                        background: 'white',
                        border: '2px solid #e5e7eb',
                        borderRadius: '24px',
                        padding: '32px',
                        margin: '30px 0',
                        position: 'relative',
                        fontFamily: 'Barlow Condensed, sans-serif'
                    }
                },
                    el('div', {
                        style: {
                            position: 'absolute',
                            top: '-2px',
                            left: '30px',
                            right: '30px',
                            height: '4px',
                            background: 'linear-gradient(90deg, #00ACF2, #FFDA56, #F1370F)',
                            borderRadius: '2px'
                        }
                    }),
                    el('div', {
                        style: {
                            display: 'flex',
                            gap: '4px',
                            marginBottom: '16px'
                        }
                    },
                        [1,2,3,4,5].map(function(i) {
                            return el('svg', {
                                key: i,
                                viewBox: '0 0 24 24',
                                style: { width: '24px', height: '24px', fill: '#FFDA56' }
                            },
                                el('polygon', {
                                    points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'
                                })
                            );
                        })
                    ),
                    el(RichText, {
                        tagName: 'p',
                        value: attributes.quote,
                        onChange: (value) => setAttributes({ quote: value }),
                        placeholder: 'Testimonial quote...',
                        style: {
                            fontSize: '19px',
                            color: '#00668F',
                            lineHeight: '1.7',
                            marginBottom: '20px',
                            fontStyle: 'italic'
                        }
                    }),
                    el('div', {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '14px'
                        }
                    },
                        el('div', {
                            style: {
                                width: '56px',
                                height: '56px',
                                background: 'linear-gradient(135deg, #00ACF2, #0092CC)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '24px',
                                flexShrink: '0'
                            }
                        }, attributes.avatar),
                        el('div', {},
                            el('h4', {
                                style: {
                                    fontSize: '17px',
                                    fontWeight: '800',
                                    color: '#00668F',
                                    marginBottom: '2px'
                                }
                            }, attributes.authorName),
                            el('p', {
                                style: {
                                    fontSize: '14px',
                                    color: '#64748b',
                                    margin: 0
                                }
                            }, attributes.authorInfo)
                        )
                    )
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
