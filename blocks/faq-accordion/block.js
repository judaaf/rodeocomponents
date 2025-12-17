(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls, RichText } = blockEditor;
    const { PanelBody, Button, IconButton } = components;
    
    registerBlockType('rodeo/faq-accordion', {
        title: 'FAQ Accordion',
        icon: 'editor-help',
        category: 'rodeo-blocks',
        attributes: {
            faqs: {
                type: 'array',
                default: [
                    { question: 'How often should I visit the dentist?', answer: 'We recommend visiting every six months for routine checkups and cleanings.' },
                    { question: 'Do you accept insurance?', answer: 'Yes, we accept most major dental insurance plans.' }
                ]
            }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            function updateFaq(index, key, value) {
                const newFaqs = [...attributes.faqs];
                newFaqs[index][key] = value;
                setAttributes({ faqs: newFaqs });
            }
            
            function addFaq() {
                const newFaqs = [...attributes.faqs, { question: 'New Question?', answer: 'Your answer here.' }];
                setAttributes({ faqs: newFaqs });
            }
            
            function removeFaq(index) {
                const newFaqs = attributes.faqs.filter((faq, i) => i !== index);
                setAttributes({ faqs: newFaqs });
            }
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'FAQ Items', initialOpen: true },
                        el('p', {}, attributes.faqs.length + ' FAQ items'),
                        el(Button, {
                            isPrimary: true,
                            onClick: addFaq
                        }, '+ Add FAQ')
                    )
                ),
                
                el('div', {
                    className: 'faq-accordion-preview',
                    style: {
                        margin: '20px 0',
                        fontFamily: 'Barlow Condensed, sans-serif'
                    }
                },
                    attributes.faqs.map(function(faq, index) {
                        return el('div', {
                            key: index,
                            style: {
                                border: '2px solid #e5e7eb',
                                borderRadius: '12px',
                                marginBottom: '12px',
                                overflow: 'hidden',
                                position: 'relative',
                                padding: '20px'
                            }
                        },
                            el(IconButton, {
                                icon: 'trash',
                                label: 'Remove',
                                onClick: () => removeFaq(index),
                                style: { 
                                    position: 'absolute', 
                                    top: '10px', 
                                    right: '10px',
                                    color: '#F1370F'
                                }
                            }),
                            el(RichText, {
                                tagName: 'div',
                                value: faq.question,
                                onChange: (value) => updateFaq(index, 'question', value),
                                placeholder: 'Question...',
                                style: {
                                    fontSize: '18px',
                                    fontWeight: '700',
                                    color: '#00668F',
                                    marginBottom: '12px'
                                }
                            }),
                            el(RichText, {
                                tagName: 'div',
                                value: faq.answer,
                                onChange: (value) => updateFaq(index, 'answer', value),
                                placeholder: 'Answer...',
                                style: {
                                    fontSize: '17px',
                                    color: '#00668F',
                                    lineHeight: '1.7'
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
