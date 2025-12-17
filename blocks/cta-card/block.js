(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls, RichText } = blockEditor;
    const { PanelBody, TextControl } = components;
    
    registerBlockType('rodeo/cta-card', {
        title: 'CTA Card',
        icon: 'megaphone',
        category: 'rodeo-blocks',
        attributes: {
            icon: {
                type: 'string',
                default: '🦷'
            },
            heading: {
                type: 'string',
                default: 'Ready for Your Best Smile?'
            },
            text: {
                type: 'string',
                default: 'Schedule your visit today and discover why families trust Rodeo Dental.'
            },
            buttonText: {
                type: 'string',
                default: 'Book Visit'
            },
            buttonUrl: {
                type: 'string',
                default: '/locations/'
            }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'CTA Settings', initialOpen: true },
                        el(TextControl, {
                            label: 'Icon (Emoji)',
                            value: attributes.icon,
                            onChange: (value) => setAttributes({ icon: value }),
                            help: 'Enter emoji: 🦷 😁 📅 🎉'
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
                    className: 'cta-card-preview',
                    style: {
                        background: 'white',
                        border: '3px solid #00ACF2',
                        borderRadius: '24px',
                        padding: '36px',
                        margin: '30px 0',
                        textAlign: 'center',
                        fontFamily: 'Barlow Condensed, sans-serif'
                    }
                },
                    el('div', {
                        style: {
                            fontSize: '56px',
                            marginBottom: '16px'
                        }
                    }, attributes.icon),
                    el(RichText, {
                        tagName: 'h3',
                        value: attributes.heading,
                        onChange: (value) => setAttributes({ heading: value }),
                        placeholder: 'CTA Heading...',
                        style: {
                            fontSize: '28px',
                            fontWeight: '800',
                            color: '#00668F',
                            textTransform: 'uppercase',
                            marginBottom: '12px'
                        }
                    }),
                    el(RichText, {
                        tagName: 'p',
                        value: attributes.text,
                        onChange: (value) => setAttributes({ text: value }),
                        placeholder: 'CTA description...',
                        style: {
                            fontSize: '18px',
                            color: '#00668F',
                            marginBottom: '24px',
                            maxWidth: '500px',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }
                    }),
                    el('div', {
                        style: {
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: 'linear-gradient(135deg, #F1370F, #D4310C)',
                            color: 'white',
                            padding: '18px 36px',
                            borderRadius: '50px',
                            fontSize: '18px',
                            fontWeight: '800',
                            textTransform: 'uppercase',
                            cursor: 'pointer'
                        }
                    }, 
                        attributes.buttonText,
                        el('span', {}, '→')
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
