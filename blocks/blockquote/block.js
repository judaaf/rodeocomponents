(function(blocks, element, blockEditor) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { RichText } = blockEditor;
    
    registerBlockType('rodeo/blockquote', {
        title: 'Blockquote',
        icon: 'format-quote',
        category: 'rodeo-blocks',
        attributes: {
            quote: {
                type: 'string',
                default: 'The team made my daughter feel so comfortable. She actually asked when we could go back!'
            },
            author: {
                type: 'string',
                default: '— Sarah M., Patient Parent'
            }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return el('blockquote', {
                className: 'blockquote-preview',
                style: {
                    background: '#f8fafc',
                    borderLeft: '5px solid #00ACF2',
                    borderRadius: '0 12px 12px 0',
                    padding: '28px 32px',
                    margin: '30px 0',
                    position: 'relative',
                    fontFamily: 'Barlow Condensed, sans-serif'
                }
            },
                el('div', {
                    style: {
                        fontSize: '72px',
                        fontWeight: '800',
                        color: '#00ACF2',
                        opacity: '0.3',
                        lineHeight: '1',
                        position: 'absolute',
                        top: '10px',
                        left: '20px'
                    }
                }, '"'),
                el(RichText, {
                    tagName: 'p',
                    value: attributes.quote,
                    onChange: (value) => setAttributes({ quote: value }),
                    placeholder: 'Enter quote...',
                    style: {
                        fontSize: '20px',
                        fontStyle: 'italic',
                        color: '#00668F',
                        margin: 0,
                        position: 'relative',
                        zIndex: 2
                    }
                }),
                el(RichText, {
                    tagName: 'cite',
                    value: attributes.author,
                    onChange: (value) => setAttributes({ author: value }),
                    placeholder: 'Author name...',
                    style: {
                        display: 'block',
                        marginTop: '16px',
                        fontSize: '15px',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        color: '#64748b'
                    }
                })
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
