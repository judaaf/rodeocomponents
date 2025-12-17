(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls } = blockEditor;
    const { PanelBody, TextControl, TextareaControl } = components;
    
    registerBlockType('rodeo/stat-highlight', {
        title: 'Stat Highlight',
        icon: 'chart-bar',
        category: 'rodeo-blocks',
        attributes: {
            statNumber: {
                type: 'string',
                default: '50%'
            },
            statLabel: {
                type: 'string',
                default: 'Reduction in cavity risk with regular checkups'
            },
            statSource: {
                type: 'string',
                default: 'National Dental Research Institute'
            }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'Stat Settings', initialOpen: true },
                        el(TextControl, {
                            label: 'Stat Number',
                            value: attributes.statNumber,
                            onChange: (value) => setAttributes({ statNumber: value }),
                            help: 'e.g., 50%, 1M+, 98%'
                        }),
                        el(TextareaControl, {
                            label: 'Stat Label',
                            value: attributes.statLabel,
                            onChange: (value) => setAttributes({ statLabel: value }),
                            help: 'Description of the statistic'
                        }),
                        el(TextControl, {
                            label: 'Source (Optional)',
                            value: attributes.statSource,
                            onChange: (value) => setAttributes({ statSource: value }),
                            help: 'Citation or source'
                        })
                    )
                ),
                
                el('div', { 
                    className: 'stat-highlight',
                    style: { 
                        background: 'linear-gradient(135deg, #00668F 0%, #004D6B 100%)',
                        borderRadius: '18px',
                        padding: '30px',
                        margin: '20px 0',
                        textAlign: 'center',
                        fontFamily: 'Barlow Condensed, sans-serif'
                    }
                },
                    el('div', { 
                        className: 'stat-number',
                        style: { 
                            fontSize: '64px',
                            fontWeight: '800',
                            color: '#FFDA56',
                            lineHeight: '1',
                            marginBottom: '8px'
                        }
                    }, attributes.statNumber),
                    el('div', {
                        className: 'stat-label',
                        style: {
                            fontSize: '18px',
                            color: 'white',
                            fontWeight: '600'
                        }
                    }, attributes.statLabel),
                    attributes.statSource && el('div', {
                        className: 'stat-source',
                        style: {
                            fontSize: '13px',
                            color: 'rgba(255,255,255,0.7)',
                            marginTop: '12px',
                            fontStyle: 'italic'
                        }
                    }, '— ' + attributes.statSource)
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
