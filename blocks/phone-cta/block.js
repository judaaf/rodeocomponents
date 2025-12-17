(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls } = blockEditor;
    const { PanelBody, TextControl } = components;
    
    registerBlockType('rodeo/phone-cta', {
        title: 'Phone CTA',
        icon: 'phone',
        category: 'rodeo-blocks',
        attributes: {
            label: {
                type: 'string',
                default: 'Call Us Today'
            },
            phone: {
                type: 'string',
                default: '(888) 453-4129'
            },
            hours: {
                type: 'string',
                default: 'Mon-Fri 8am-6pm'
            }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'Phone CTA Settings', initialOpen: true },
                        el(TextControl, {
                            label: 'Label',
                            value: attributes.label,
                            onChange: (value) => setAttributes({ label: value })
                        }),
                        el(TextControl, {
                            label: 'Phone Number',
                            value: attributes.phone,
                            onChange: (value) => setAttributes({ phone: value }),
                            help: 'Default: (888) 453-4129'
                        }),
                        el(TextControl, {
                            label: 'Hours',
                            value: attributes.hours,
                            onChange: (value) => setAttributes({ hours: value })
                        })
                    )
                ),
                
                el('div', {
                    className: 'cta-phone-preview',
                    style: {
                        background: '#f8fafc',
                        border: '2px solid #e5e7eb',
                        borderRadius: '18px',
                        padding: '24px',
                        margin: '30px 0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        fontFamily: 'Barlow Condensed, sans-serif'
                    }
                },
                    el('div', {
                        style: {
                            width: '60px',
                            height: '60px',
                            background: 'linear-gradient(135deg, #10b981, #059669)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: '0'
                        }
                    },
                        el('svg', {
                            viewBox: '0 0 24 24',
                            fill: 'none',
                            stroke: 'white',
                            strokeWidth: '2',
                            style: { width: '28px', height: '28px' }
                        },
                            el('path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' })
                        )
                    ),
                    el('div', { style: { flex: 1 }},
                        el('div', {
                            style: {
                                fontSize: '14px',
                                fontWeight: '700',
                                color: '#64748b',
                                textTransform: 'uppercase',
                                marginBottom: '4px'
                            }
                        }, attributes.label),
                        el('div', {
                            style: {
                                fontSize: '28px',
                                fontWeight: '800',
                                color: '#00ACF2'
                            }
                        }, attributes.phone),
                        el('div', {
                            style: {
                                fontSize: '14px',
                                color: '#64748b',
                                marginTop: '4px'
                            }
                        }, attributes.hours)
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
