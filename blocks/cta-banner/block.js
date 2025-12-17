(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls, RichText } = blockEditor;
    const { PanelBody, TextControl } = components;
    
    registerBlockType('rodeo/cta-banner', {
        title: 'CTA Banner',
        icon: 'megaphone',
        category: 'rodeo-blocks',
        attributes: {
            icon: {
                type: 'string',
                default: '🎉'
            },
            heading: {
                type: 'string',
                default: 'New Patient Special!'
            },
            text: {
                type: 'string',
                default: 'Free exam & X-rays'
            },
            buttonText: {
                type: 'string',
                default: 'Claim Offer'
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
                    el(PanelBody, { title: 'Banner Settings', initialOpen: true },
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
                    className: 'cta-banner-preview',
                    style: {
                        background: 'linear-gradient(135deg, #FFDA56, #FFC700)',
                        borderRadius: '18px',
                        padding: '24px 32px',
                        margin: '30px 0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '20px',
                        fontFamily: 'Barlow Condensed, sans-serif'
                    }
                },
                    el('div', {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px'
                        }
                    },
                        el('span', { style: { fontSize: '36px' }}, attributes.icon),
                        el('div', {},
                            el(RichText, {
                                tagName: 'h4',
                                value: attributes.heading,
                                onChange: (value) => setAttributes({ heading: value }),
                                placeholder: 'Banner heading...',
                                style: {
                                    fontSize: '22px',
                                    fontWeight: '800',
                                    color: '#00668F',
                                    textTransform: 'uppercase',
                                    margin: 0
                                }
                            }),
                            el(RichText, {
                                tagName: 'p',
                                value: attributes.text,
                                onChange: (value) => setAttributes({ text: value }),
                                placeholder: 'Banner text...',
                                style: {
                                    fontSize: '16px',
                                    color: '#00668F',
                                    margin: '4px 0 0',
                                    fontWeight: '600'
                                }
                            })
                        )
                    ),
                    el('div', {
                        style: {
                            background: '#00668F',
                            color: 'white',
                            padding: '14px 28px',
                            borderRadius: '50px',
                            fontSize: '16px',
                            fontWeight: '800',
                            textTransform: 'uppercase'
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
