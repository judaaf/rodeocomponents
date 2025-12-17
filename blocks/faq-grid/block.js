(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls, RichText } = blockEditor;
    const { PanelBody, TextControl, Button, IconButton } = components;
    
    registerBlockType('rodeo/faq-grid', {
        title: 'FAQ Grid',
        icon: 'grid-view',
        category: 'rodeo-blocks',
        attributes: {
            faqs: {
                type: 'array',
                default: [
                    { icon: '❓', question: 'How long are appointments?', answer: 'Most routine visits take 30-60 minutes.' },
                    { icon: '❓', question: 'Do you see children?', answer: 'Yes! We love kids and make visits fun.' }
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
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'FAQ Items', initialOpen: true },
                        el('p', {}, attributes.faqs.length + ' items'),
                        el(Button, { isPrimary: true, onClick: () => setAttributes({ faqs: [...attributes.faqs, { icon: '❓', question: 'New question?', answer: 'Answer here.' }] }) }, '+ Add FAQ')
                    )
                ),
                
                el('div', { className: 'faq-grid-preview', style: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', margin: '40px 0', fontFamily: 'Barlow Condensed, sans-serif' }},
                    attributes.faqs.map(function(faq, index) {
                        return el('div', { key: index, style: { background: '#f8fafc', border: '2px solid #e5e7eb', borderRadius: '18px', padding: '24px', position: 'relative' }},
                            el(IconButton, { icon: 'trash', label: 'Remove', onClick: () => setAttributes({ faqs: attributes.faqs.filter((_, i) => i !== index) }), style: { position: 'absolute', top: '10px', right: '10px', color: '#F1370F' }}),
                            el(TextControl, { label: 'Icon', value: faq.icon, onChange: (v) => updateFaq(index, 'icon', v) }),
                            el(RichText, { tagName: 'h4', value: faq.question, onChange: (v) => updateFaq(index, 'question', v), placeholder: 'Question...', style: { fontSize: '18px', fontWeight: '800', color: '#00668F', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}),
                            el(RichText, { tagName: 'p', value: faq.answer, onChange: (v) => updateFaq(index, 'answer', v), placeholder: 'Answer...', style: { fontSize: '16px', color: '#00668F', margin: 0, lineHeight: 1.6 }})
                        );
                    })
                )
            ];
        },
        save: function() { return null; }
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);
