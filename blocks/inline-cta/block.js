(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls, RichText } = blockEditor;
    const { PanelBody, TextControl, SelectControl } = components;
    
    registerBlockType('rodeo/inline-cta', {
        title: 'Inline CTA',
        icon: 'megaphone',
        category: 'rodeo-blocks',
        attributes: {
            icon: {
                type: 'string',
                default: '📅'
            },
            heading: {
                type: 'string',
                default: 'Ready to Schedule?'
            },
            text: {
                type: 'string',
                default: 'Book your appointment today!'
            },
            buttonText: {
                type: 'string',
                default: 'Book Now'
            },
            buttonUrl: {
                type: 'string',
                default: '/locations/'
            },
            colorScheme: {
                type: 'string',
                default: 'red'
            }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            const colors = {
                'red': { bg: 'linear-gradient(135deg, #F1370F, #D4310C)', text: 'white' },
                'blue': { bg: 'linear-gradient(135deg, #00ACF2, #00668F)', text: 'white' }
            };
            
            const currentColor = colors[attributes.colorScheme];
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'CTA Settings', initialOpen: true },
                        el(SelectControl, {
                            label: 'Color Scheme',
                            value: attributes.colorScheme,
                            options: [
                                { label: 'Red (Primary)', value: 'red' },
                                { label: 'Blue (Secondary)', value: 'blue' }
                            ],
                            onChange: (value) => setAttributes({ colorScheme: value })
                        }),
                        el(TextControl, {
                            label: 'Icon (Emoji)',
                            value: attributes.icon,
                            onChange: (value) => setAttributes({ icon: value })
                        }),
                        el(TextControl, {
                            label: 'Button Text',
                            value: attributes.buttonText,
                            onChange: (value) => setAttributes({ buttonText: value })
                        }),
                        el(TextControl, {
                            label: 'Button URL',
                            value: attributes.buttonUrl,
                            onChange: (value) => setAttributes({ buttonUrl: value }),
                            help: 'Default: /locations/'
                        })
                    )
                ),
                
                el('div', {
                    className: 'inline-cta-preview',
                    style: {
                        background: currentColor.bg,
                        borderRadius: '18px',
                        padding: '32px',
                        margin: '30px 0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '24px',
                        color: currentColor.text,
                        fontFamily: 'Barlow Condensed, sans-serif'
                    }
                },
                    el('div', {
                        style: {
                            width: '70px',
                            height: '70px',
                            background: 'rgba(255,255,255,0.15)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: '0',
                            fontSize: '32px'
                        }
                    }, attributes.icon),
                    el('div', { style: { flex: 1 }},
                        el(RichText, {
                            tagName: 'h4',
                            value: attributes.heading,
                            onChange: (value) => setAttributes({ heading: value }),
                            placeholder: 'CTA Heading...',
                            style: {
                                fontSize: '24px',
                                fontWeight: '800',
                                textTransform: 'uppercase',
                                marginBottom: '6px',
                                color: 'white'
                            }
                        }),
                        el(RichText, {
                            tagName: 'p',
                            value: attributes.text,
                            onChange: (value) => setAttributes({ text: value }),
                            placeholder: 'CTA description...',
                            style: {
                                fontSize: '16px',
                                color: 'rgba(255,255,255,0.9)',
                                margin: 0,
                                fontWeight: '600'
                            }
                        })
                    ),
                    el('div', {
                        style: {
                            background: 'rgba(255,255,255,0.2)',
                            border: '2px solid white',
                            color: 'white',
                            padding: '16px 28px',
                            borderRadius: '50px',
                            fontSize: '16px',
                            fontWeight: '800',
                            textTransform: 'uppercase',
                            whiteSpace: 'nowrap'
                        }
                    }, attributes.buttonText)
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
