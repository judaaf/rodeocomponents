(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls, RichText } = blockEditor;
    const { PanelBody, SelectControl } = components;
    
    const calloutTypes = {
        'takeaway': {
            label: 'Key Takeaway',
            icon: '💡',
            bgColor: 'linear-gradient(135deg, #E0F7FA 0%, #B2EBF2 100%)',
            borderColor: '#00ACF2',
            textColor: '#00668F'
        },
        'tip': {
            label: 'Pro Tip',
            icon: '💡',
            bgColor: 'linear-gradient(135deg, #FEF9E7 0%, #FFF8DC 100%)',
            borderColor: '#FFDA56',
            textColor: '#00668F'
        },
        'warning': {
            label: 'Warning',
            icon: '⚠️',
            bgColor: 'linear-gradient(135deg, #FEF2F2 0%, #FECACA 100%)',
            borderColor: '#F1370F',
            textColor: '#D4310C'
        },
        'success': {
            label: 'Success',
            icon: '✅',
            bgColor: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
            borderColor: '#10b981',
            textColor: '#065f46'
        },
        'info': {
            label: 'Did You Know?',
            icon: 'ℹ️',
            bgColor: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)',
            borderColor: '#8b5cf6',
            textColor: '#5b21b6'
        },
        'note': {
            label: 'Note',
            icon: '📝',
            bgColor: '#f8fafc',
            borderColor: '#e5e7eb',
            textColor: '#334155'
        }
    };
    
    registerBlockType('rodeo/callout-box', {
        title: 'Callout Box',
        icon: 'info',
        category: 'rodeo-blocks',
        attributes: {
            type: {
                type: 'string',
                default: 'takeaway'
            },
            content: {
                type: 'string',
                default: 'Your callout message goes here.'
            }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            const currentType = calloutTypes[attributes.type];
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'Callout Settings', initialOpen: true },
                        el(SelectControl, {
                            label: 'Callout Type',
                            value: attributes.type,
                            options: [
                                { label: '💡 Key Takeaway', value: 'takeaway' },
                                { label: '💡 Pro Tip', value: 'tip' },
                                { label: '⚠️ Warning', value: 'warning' },
                                { label: '✅ Success', value: 'success' },
                                { label: 'ℹ️ Did You Know?', value: 'info' },
                                { label: '📝 Note', value: 'note' }
                            ],
                            onChange: (value) => setAttributes({ type: value })
                        })
                    )
                ),
                
                el('div', {
                    className: 'callout-preview',
                    style: {
                        background: currentType.bgColor,
                        borderLeft: '5px solid ' + currentType.borderColor,
                        borderRadius: '0 12px 12px 0',
                        padding: '24px 28px',
                        margin: '20px 0',
                        fontFamily: 'Barlow Condensed, sans-serif'
                    }
                },
                    el('div', {
                        className: 'callout-label',
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '14px',
                            fontWeight: '800',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            marginBottom: '10px',
                            color: currentType.textColor
                        }
                    },
                        el('span', {}, currentType.icon),
                        el('span', {}, currentType.label)
                    ),
                    el(RichText, {
                        tagName: 'p',
                        value: attributes.content,
                        onChange: (value) => setAttributes({ content: value }),
                        placeholder: 'Enter your callout message...',
                        style: {
                            fontSize: '17px',
                            lineHeight: '1.6',
                            color: currentType.textColor,
                            margin: 0
                        }
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
