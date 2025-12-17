(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls, RichText } = blockEditor;
    const { PanelBody, SelectControl, Button, IconButton } = components;
    
    registerBlockType('rodeo/process-steps', {
        title: 'Process Steps',
        icon: 'list-view',
        category: 'rodeo-blocks',
        attributes: {
            steps: {
                type: 'array',
                default: [
                    { title: 'Step One', description: 'Description of the first step in the process.', color: 'blue' },
                    { title: 'Step Two', description: 'Description of the second step.', color: 'red' },
                    { title: 'Step Three', description: 'Description of the third step.', color: 'yellow' },
                    { title: 'Step Four', description: 'Final step with completion.', color: 'green' }
                ]
            }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            const colorOptions = {
                'blue': 'linear-gradient(135deg, #00ACF2, #0092CC)',
                'red': 'linear-gradient(135deg, #F1370F, #D4310C)',
                'yellow': 'linear-gradient(135deg, #FFDA56, #FFC700)',
                'green': 'linear-gradient(135deg, #10b981, #059669)'
            };
            
            function updateStep(index, key, value) {
                const newSteps = [...attributes.steps];
                newSteps[index][key] = value;
                setAttributes({ steps: newSteps });
            }
            
            function addStep() {
                const newSteps = [...attributes.steps, { 
                    title: 'New Step', 
                    description: 'Description for this step.', 
                    color: 'blue' 
                }];
                setAttributes({ steps: newSteps });
            }
            
            function removeStep(index) {
                const newSteps = attributes.steps.filter((step, i) => i !== index);
                setAttributes({ steps: newSteps });
            }
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'Process Steps', initialOpen: true },
                        el('p', {}, attributes.steps.length + ' steps in process'),
                        el(Button, {
                            isPrimary: true,
                            onClick: addStep
                        }, '+ Add Step')
                    )
                ),
                
                el('div', {
                    className: 'process-steps-preview',
                    style: {
                        margin: '20px 0',
                        fontFamily: 'Barlow Condensed, sans-serif'
                    }
                },
                    attributes.steps.map(function(step, index) {
                        return el('div', {
                            key: index,
                            style: {
                                display: 'flex',
                                gap: '20px',
                                marginBottom: '24px',
                                padding: '16px',
                                background: '#f9f9f9',
                                borderRadius: '12px',
                                position: 'relative'
                            }
                        },
                            el('div', {
                                style: {
                                    width: '50px',
                                    height: '50px',
                                    background: colorOptions[step.color],
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '22px',
                                    fontWeight: '800',
                                    color: step.color === 'yellow' ? '#00668F' : 'white',
                                    flexShrink: '0'
                                }
                            }, (index + 1).toString()),
                            el('div', { style: { flex: 1 }},
                                el(SelectControl, {
                                    label: 'Step Color',
                                    value: step.color,
                                    options: [
                                        { label: 'Blue', value: 'blue' },
                                        { label: 'Red', value: 'red' },
                                        { label: 'Yellow', value: 'yellow' },
                                        { label: 'Green', value: 'green' }
                                    ],
                                    onChange: (value) => updateStep(index, 'color', value)
                                }),
                                el(RichText, {
                                    tagName: 'h4',
                                    value: step.title,
                                    onChange: (value) => updateStep(index, 'title', value),
                                    placeholder: 'Step title...',
                                    style: {
                                        fontSize: '20px',
                                        fontWeight: '800',
                                        color: '#00668F',
                                        textTransform: 'uppercase',
                                        marginBottom: '8px'
                                    }
                                }),
                                el(RichText, {
                                    tagName: 'p',
                                    value: step.description,
                                    onChange: (value) => updateStep(index, 'description', value),
                                    placeholder: 'Step description...',
                                    style: {
                                        fontSize: '17px',
                                        color: '#00668F',
                                        margin: 0
                                    }
                                })
                            ),
                            el(IconButton, {
                                icon: 'trash',
                                label: 'Remove',
                                onClick: () => removeStep(index),
                                style: { color: '#F1370F', position: 'absolute', top: '10px', right: '10px' }
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
