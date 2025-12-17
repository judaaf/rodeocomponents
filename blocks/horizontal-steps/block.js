(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls, RichText } = blockEditor;
    const { PanelBody, Button, IconButton } = components;
    
    registerBlockType('rodeo/horizontal-steps', {
        title: 'Horizontal Steps',
        icon: 'ellipsis',
        category: 'rodeo-blocks',
        attributes: {
            steps: {
                type: 'array',
                default: [
                    { title: 'Book', description: 'Schedule online' },
                    { title: 'Visit', description: 'Come in' },
                    { title: 'Care', description: 'Get treatment' },
                    { title: 'Smile', description: 'Enjoy results' }
                ]
            }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            function updateStep(index, key, value) {
                const newSteps = [...attributes.steps];
                newSteps[index][key] = value;
                setAttributes({ steps: newSteps });
            }
            
            function addStep() {
                const newSteps = [...attributes.steps, { title: 'New Step', description: 'Description' }];
                setAttributes({ steps: newSteps });
            }
            
            function removeStep(index) {
                const newSteps = attributes.steps.filter((step, i) => i !== index);
                setAttributes({ steps: newSteps });
            }
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'Horizontal Steps', initialOpen: true },
                        el('p', {}, attributes.steps.length + ' steps'),
                        el(Button, {
                            isPrimary: true,
                            onClick: addStep
                        }, '+ Add Step')
                    )
                ),
                
                el('div', {
                    className: 'horizontal-steps-preview',
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(' + Math.min(attributes.steps.length, 4) + ', 1fr)',
                        gap: '20px',
                        margin: '30px 0',
                        fontFamily: 'Barlow Condensed, sans-serif'
                    }
                },
                    attributes.steps.map(function(step, index) {
                        return el('div', {
                            key: index,
                            style: {
                                textAlign: 'center',
                                position: 'relative',
                                padding: '20px',
                                background: '#f9f9f9',
                                borderRadius: '12px'
                            }
                        },
                            el(IconButton, {
                                icon: 'trash',
                                label: 'Remove',
                                onClick: () => removeStep(index),
                                style: { 
                                    position: 'absolute', 
                                    top: '5px', 
                                    right: '5px',
                                    color: '#F1370F'
                                }
                            }),
                            el('div', {
                                style: {
                                    width: '50px',
                                    height: '50px',
                                    background: 'linear-gradient(135deg, #00ACF2, #0092CC)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '22px',
                                    fontWeight: '800',
                                    color: 'white',
                                    margin: '0 auto 16px'
                                }
                            }, (index + 1).toString()),
                            el(RichText, {
                                tagName: 'h4',
                                value: step.title,
                                onChange: (value) => updateStep(index, 'title', value),
                                placeholder: 'Step title...',
                                style: {
                                    fontSize: '17px',
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
                                placeholder: 'Description...',
                                style: {
                                    fontSize: '15px',
                                    color: '#64748b',
                                    margin: 0
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
