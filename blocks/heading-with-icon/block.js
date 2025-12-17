(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls, RichText, MediaUpload } = blockEditor;
    const { PanelBody, TextControl, SelectControl, Button, ColorPalette } = components;
    
    registerBlockType('rodeo/heading-with-icon', {
        title: 'Heading with Icon',
        icon: 'star-filled',
        category: 'rodeo-blocks',
        attributes: {
            heading: {
                type: 'string',
                default: 'Heading with Icon'
            },
            iconType: {
                type: 'string',
                default: 'emoji'
            },
            iconEmoji: {
                type: 'string',
                default: '🦷'
            },
            iconImage: {
                type: 'string',
                default: ''
            },
            iconImageId: {
                type: 'number',
                default: 0
            },
            iconColor: {
                type: 'string',
                default: '#00ACF2'
            },
            iconBgColor: {
                type: 'string',
                default: 'linear-gradient(135deg, #00ACF2, #0092CC)'
            },
            headingColor: {
                type: 'string',
                default: '#00668F'
            },
            headingLevel: {
                type: 'string',
                default: 'h2'
            }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            const colors = [
                { name: 'Blue Light', color: '#00ACF2' },
                { name: 'Blue', color: '#0092CC' },
                { name: 'Blue Dark', color: '#00668F' },
                { name: 'Red', color: '#F1370F' },
                { name: 'Yellow', color: '#FFDA56' },
                { name: 'Green', color: '#10b981' },
            ];
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'Heading Settings', initialOpen: true },
                        el(SelectControl, {
                            label: 'Heading Level',
                            value: attributes.headingLevel,
                            options: [
                                { label: 'H1', value: 'h1' },
                                { label: 'H2', value: 'h2' },
                                { label: 'H3', value: 'h3' },
                                { label: 'H4', value: 'h4' },
                            ],
                            onChange: (value) => setAttributes({ headingLevel: value })
                        }),
                        el('p', { style: { marginTop: '10px', fontWeight: 'bold' }}, 'Heading Color'),
                        el(ColorPalette, {
                            colors: colors,
                            value: attributes.headingColor,
                            onChange: (value) => setAttributes({ headingColor: value || '#00668F' })
                        })
                    ),
                    
                    el(PanelBody, { title: 'Icon Settings', initialOpen: true },
                        el(SelectControl, {
                            label: 'Icon Type',
                            value: attributes.iconType,
                            options: [
                                { label: 'Emoji', value: 'emoji' },
                                { label: 'Image', value: 'image' },
                                { label: 'HTML/SVG', value: 'html' }
                            ],
                            onChange: (value) => setAttributes({ iconType: value })
                        }),
                        
                        attributes.iconType === 'emoji' && el(TextControl, {
                            label: 'Emoji Icon',
                            value: attributes.iconEmoji,
                            onChange: (value) => setAttributes({ iconEmoji: value }),
                            help: 'Enter any emoji: 🦷 😁 ⭐ 🎉 💡 ✅'
                        }),
                        
                        attributes.iconType === 'image' && el(MediaUpload, {
                            onSelect: (media) => setAttributes({ 
                                iconImage: media.url,
                                iconImageId: media.id 
                            }),
                            allowedTypes: ['image'],
                            value: attributes.iconImageId,
                            render: function(obj) {
                                return el('div', {},
                                    el(Button, {
                                        onClick: obj.open,
                                        isPrimary: true
                                    }, attributes.iconImage ? 'Change Image' : 'Upload Image'),
                                    attributes.iconImage && el('img', {
                                        src: attributes.iconImage,
                                        style: { 
                                            marginTop: '10px', 
                                            maxWidth: '100px', 
                                            display: 'block',
                                            borderRadius: '8px'
                                        }
                                    }),
                                    attributes.iconImage && el(Button, {
                                        onClick: () => setAttributes({ iconImage: '', iconImageId: 0 }),
                                        isDestructive: true,
                                        style: { marginTop: '10px' }
                                    }, 'Remove Image')
                                );
                            }
                        }),
                        
                        attributes.iconType === 'html' && el(TextControl, {
                            label: 'HTML/SVG Code',
                            value: attributes.iconEmoji,
                            onChange: (value) => setAttributes({ iconEmoji: value }),
                            help: 'Paste SVG or HTML icon code'
                        }),
                        
                        el('p', { style: { marginTop: '15px', fontWeight: 'bold' }}, 'Icon Background Color'),
                        el(ColorPalette, {
                            colors: colors,
                            value: attributes.iconColor,
                            onChange: (value) => setAttributes({ iconColor: value || '#00ACF2' })
                        })
                    )
                ),
                
                el('div', { 
                    className: 'heading-with-icon-preview',
                    style: { 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        margin: '20px 0',
                        fontFamily: 'Barlow Condensed, sans-serif'
                    }
                },
                    el('div', {
                        className: 'h2-icon',
                        style: {
                            width: '50px',
                            height: '50px',
                            background: 'linear-gradient(135deg, ' + attributes.iconColor + ', ' + attributes.iconColor + ')',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: attributes.iconType === 'emoji' ? '24px' : '20px',
                            flexShrink: '0',
                            overflow: 'hidden'
                        }
                    },
                        attributes.iconType === 'emoji' && attributes.iconEmoji,
                        attributes.iconType === 'image' && attributes.iconImage && el('img', {
                            src: attributes.iconImage,
                            style: { width: '100%', height: '100%', objectFit: 'cover' }
                        }),
                        attributes.iconType === 'html' && el('div', {
                            dangerouslySetInnerHTML: { __html: attributes.iconEmoji }
                        })
                    ),
                    
                    el(RichText, {
                        tagName: attributes.headingLevel,
                        value: attributes.heading,
                        onChange: (value) => setAttributes({ heading: value }),
                        placeholder: 'Enter heading text...',
                        style: {
                            fontSize: attributes.headingLevel === 'h2' ? '32px' : 
                                     attributes.headingLevel === 'h3' ? '24px' : 
                                     attributes.headingLevel === 'h4' ? '20px' : '36px',
                            fontWeight: '800',
                            color: attributes.headingColor,
                            textTransform: 'uppercase',
                            margin: '0',
                            lineHeight: '1.2'
                        }
                    })
                )
            ];
        },
        
        save: function() {
            return null; // Dynamic block
        }
    });
})(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor,
    window.wp.components
);
