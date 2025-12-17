(function(blocks, element, blockEditor) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { RichText } = blockEditor;
    
    registerBlockType('rodeo/lead-paragraph', {
        title: 'Lead Paragraph',
        icon: 'text',
        category: 'rodeo-blocks',
        attributes: {
            content: {
                type: 'string',
                default: 'This is a lead paragraph for important introductions that need extra emphasis.'
            }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return el(RichText, {
                tagName: 'p',
                value: attributes.content,
                onChange: (value) => setAttributes({ content: value }),
                placeholder: 'Enter lead paragraph text...',
                className: 'lead-paragraph-preview',
                style: {
                    fontSize: '22px',
                    fontWeight: '600',
                    color: '#00668F',
                    lineHeight: '1.6',
                    fontFamily: 'Barlow Condensed, sans-serif'
                }
            });
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
