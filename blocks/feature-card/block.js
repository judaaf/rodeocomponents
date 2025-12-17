(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls, RichText } = blockEditor;
    const { PanelBody, TextControl } = components;
    
    registerBlockType('rodeo/feature-card', {
        title: 'Feature Card',
        icon: 'id',
        category: 'rodeo-blocks',
        attributes: {
            icon: { type: 'string', default: '🦷' },
            heading: { type: 'string', default: 'Feature Card Layout' },
            text: { type: 'string', default: 'Use this for highlighting important services or content with an image on the left and text on the right.' },
            buttonText: { type: 'string', default: 'Learn More' },
            buttonUrl: { type: 'string', default: '/locations/' }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'Feature Settings', initialOpen: true },
                        el(TextControl, { label: 'Icon', value: attributes.icon, onChange: (v) => setAttributes({ icon: v }) }),
                        el(TextControl, { label: 'Button Text', value: attributes.buttonText, onChange: (v) => setAttributes({ buttonText: v }) }),
                        el(TextControl, { label: 'Button URL', value: attributes.buttonUrl, onChange: (v) => setAttributes({ buttonUrl: v }) })
                    )
                ),
                
                el('div', { className: 'feature-card-preview', style: { background: 'white', borderRadius: '24px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', overflow: 'hidden', margin: '30px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', fontFamily: 'Barlow Condensed, sans-serif' }},
                    el('div', { style: { background: 'linear-gradient(135deg, #00ACF2, #0092CC)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '80px', minHeight: '300px' }}, attributes.icon),
                    el('div', { style: { padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }},
                        el(RichText, { tagName: 'h3', value: attributes.heading, onChange: (v) => setAttributes({ heading: v }), placeholder: 'Heading...', style: { fontSize: '28px', fontWeight: '800', color: '#00668F', textTransform: 'uppercase', marginBottom: '16px' }}),
                        el(RichText, { tagName: 'p', value: attributes.text, onChange: (v) => setAttributes({ text: v }), placeholder: 'Description...', style: { fontSize: '17px', color: '#00668F', marginBottom: '24px' }}),
                        el('div', { style: { display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'linear-gradient(135deg, #F1370F, #D4310C)', color: 'white', padding: '14px 28px', borderRadius: '50px', fontSize: '16px', fontWeight: '800', textTransform: 'uppercase' }}, attributes.buttonText, ' →')
                    )
                )
            ];
        },
        save: function() { return null; }
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);
