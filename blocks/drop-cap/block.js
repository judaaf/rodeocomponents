(function(blocks, element, blockEditor) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { RichText } = blockEditor;
    
    registerBlockType('rodeo/drop-cap', {
        title: 'Drop Cap Paragraph',
        icon: 'editor-textcolor',
        category: 'rodeo-blocks',
        attributes: {
            content: {
                type: 'string',
                default: 'Drop cap paragraph for editorial style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return el('div', { style: { fontFamily: 'Barlow Condensed, sans-serif' }},
                el(RichText, {
                    tagName: 'p',
                    value: attributes.content,
                    onChange: (value) => setAttributes({ content: value }),
                    placeholder: 'Enter drop cap paragraph...',
                    className: 'drop-cap-preview',
                    style: {
                        fontSize: '18px',
                        lineHeight: '1.8',
                        color: '#00668F'
                    }
                }),
                el('p', { style: { fontSize: '12px', color: '#666', marginTop: '8px' }},
                    '💡 First letter will be styled as a large drop cap on the frontend'
                )
            );
        },
        
        save: function() {
            return null;
        }
    });
})(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);
