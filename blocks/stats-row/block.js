(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls } = blockEditor;
    const { PanelBody, TextControl, Button, IconButton } = components;
    
    registerBlockType('rodeo/stats-row', {
        title: 'Stats Row',
        icon: 'chart-line',
        category: 'rodeo-blocks',
        attributes: {
            stats: {
                type: 'array',
                default: [
                    { number: '50+', label: 'Locations' },
                    { number: '1M+', label: 'Patients' },
                    { number: '15+', label: 'Years' }
                ]
            }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            function updateStat(index, key, value) {
                const newStats = [...attributes.stats];
                newStats[index][key] = value;
                setAttributes({ stats: newStats });
            }
            
            function addStat() {
                const newStats = [...attributes.stats, { number: '100+', label: 'New Stat' }];
                setAttributes({ stats: newStats });
            }
            
            function removeStat(index) {
                const newStats = attributes.stats.filter((stat, i) => i !== index);
                setAttributes({ stats: newStats });
            }
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'Stats', initialOpen: true },
                        el('p', {}, attributes.stats.length + ' stats in row'),
                        el(Button, {
                            isPrimary: true,
                            onClick: addStat
                        }, '+ Add Stat')
                    )
                ),
                
                el('div', {
                    className: 'stats-row-preview',
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(' + Math.min(attributes.stats.length, 3) + ', 1fr)',
                        gap: '20px',
                        margin: '20px 0',
                        fontFamily: 'Barlow Condensed, sans-serif'
                    }
                },
                    attributes.stats.map(function(stat, index) {
                        return el('div', {
                            key: index,
                            style: {
                                background: '#f8fafc',
                                border: '2px solid #e5e7eb',
                                borderRadius: '18px',
                                padding: '28px 20px',
                                textAlign: 'center',
                                position: 'relative'
                            }
                        },
                            el(IconButton, {
                                icon: 'trash',
                                label: 'Remove',
                                onClick: () => removeStat(index),
                                style: { 
                                    position: 'absolute', 
                                    top: '8px', 
                                    right: '8px',
                                    color: '#F1370F'
                                }
                            }),
                            el(TextControl, {
                                label: 'Number',
                                value: stat.number,
                                onChange: (value) => updateStat(index, 'number', value),
                                style: {
                                    fontSize: '42px',
                                    fontWeight: '800',
                                    color: '#00668F',
                                    textAlign: 'center',
                                    marginBottom: '8px'
                                }
                            }),
                            el(TextControl, {
                                label: 'Label',
                                value: stat.label,
                                onChange: (value) => updateStat(index, 'label', value),
                                style: {
                                    fontSize: '15px',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    textAlign: 'center'
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
