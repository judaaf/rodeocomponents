(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls, RichText } = blockEditor;
    const { PanelBody, SelectControl } = components;
    
    registerBlockType('rodeo/highlight-text', {
        title: 'Highlight Text',
        icon: 'marker',
        category: 'rodeo-blocks',
        attributes: {
            content: {
                type: 'string',
                default: 'This text is highlighted for emphasis'
            },
            highlightType: {
                type: 'string',
                default: 'yellow'
            }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'Highlight Settings', initialOpen: true },
                        el(SelectControl, {
                            label: 'Highlight Color',
                            value: attributes.highlightType,
                            options: [
                                { label: 'Yellow Highlight', value: 'yellow' },
                                { label: 'Blue Highlight', value: 'blue' }
                            ],
                            onChange: (value) => setAttributes({ highlightType: value })
                        })
                    )
                ),
                
                el(RichText, {
                    tagName: 'span',
                    value: attributes.content,
                    onChange: (value) => setAttributes({ content: value }),
                    placeholder: 'Text to highlight...',
                    className: 'highlight-' + attributes.highlightType,
                    style: {
                        background: attributes.highlightType === 'yellow' 
                            ? 'linear-gradient(180deg, transparent 50%, rgba(255,218,86,0.4) 50%)'
                            : 'linear-gradient(180deg, transparent 50%, rgba(0,172,242,0.2) 50%)',
                        padding: '0 4px',
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontSize: '18px'
                    }
                })
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
