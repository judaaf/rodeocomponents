(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls, RichText } = blockEditor;
    const { PanelBody, TextControl, Button, IconButton } = components;
    
    registerBlockType('rodeo/service-cards', {
        title: 'Service Cards',
        icon: 'grid-view',
        category: 'rodeo-blocks',
        attributes: {
            cards: {
                type: 'array',
                default: [
                    { icon: '🦷', title: 'General', description: 'Comprehensive dental care for the whole family.', link: '#' },
                    { icon: '😁', title: 'Cosmetic', description: 'Transform your smile with cosmetic treatments.', link: '#' },
                    { icon: '👶', title: 'Pediatric', description: 'Kid-friendly dental care in a fun environment.', link: '#' }
                ]
            }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            function updateCard(index, key, value) {
                const newCards = [...attributes.cards];
                newCards[index][key] = value;
                setAttributes({ cards: newCards });
            }
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'Service Cards', initialOpen: true },
                        el('p', {}, attributes.cards.length + ' cards'),
                        el(Button, { isPrimary: true, onClick: () => setAttributes({ cards: [...attributes.cards, { icon: '🦷', title: 'New Service', description: 'Description here.', link: '#' }] }) }, '+ Add Card')
                    )
                ),
                
                el('div', { className: 'cards-grid-preview', style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', margin: '30px 0', fontFamily: 'Barlow Condensed, sans-serif' }},
                    attributes.cards.map(function(card, index) {
                        return el('div', { key: index, style: { background: '#f8fafc', border: '2px solid #e5e7eb', borderRadius: '18px', padding: '28px', textAlign: 'center', position: 'relative' }},
                            el(IconButton, { icon: 'trash', label: 'Remove', onClick: () => setAttributes({ cards: attributes.cards.filter((_, i) => i !== index) }), style: { position: 'absolute', top: '10px', right: '10px', color: '#F1370F' }}),
                            el(TextControl, { label: 'Icon', value: card.icon, onChange: (v) => updateCard(index, 'icon', v), style: { fontSize: '48px', textAlign: 'center', marginBottom: '16px' }}),
                            el(RichText, { tagName: 'h3', value: card.title, onChange: (v) => updateCard(index, 'title', v), placeholder: 'Service title...', style: { fontSize: '20px', fontWeight: '800', color: '#00668F', textTransform: 'uppercase', marginBottom: '10px' }}),
                            el(RichText, { tagName: 'p', value: card.description, onChange: (v) => updateCard(index, 'description', v), placeholder: 'Description...', style: { fontSize: '16px', color: '#00668F', marginBottom: '16px' }}),
                            el(TextControl, { label: 'Link', value: card.link, onChange: (v) => updateCard(index, 'link', v) })
                        );
                    })
                )
            ];
        },
        save: function() { return null; }
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);
