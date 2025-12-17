(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls, RichText } = blockEditor;
    const { PanelBody, Button, IconButton } = components;
    
    registerBlockType('rodeo/data-table', {
        title: 'Data Table',
        icon: 'editor-table',
        category: 'rodeo-blocks',
        attributes: {
            headers: { type: 'array', default: ['Service', 'Time', 'Cost'] },
            rows: {
                type: 'array',
                default: [
                    ['Cleaning', '1 hour', '$120'],
                    ['Filling', '45 min', '$180'],
                    ['Crown', '2 hours', '$900']
                ]
            }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            function updateHeader(index, value) {
                const newHeaders = [...attributes.headers];
                newHeaders[index] = value;
                setAttributes({ headers: newHeaders });
            }
            
            function updateCell(rowIndex, colIndex, value) {
                const newRows = [...attributes.rows];
                newRows[rowIndex][colIndex] = value;
                setAttributes({ rows: newRows });
            }
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'Table Settings', initialOpen: true },
                        el('p', {}, attributes.rows.length + ' rows, ' + attributes.headers.length + ' columns'),
                        el(Button, { isPrimary: true, onClick: () => setAttributes({ rows: [...attributes.rows, Array(attributes.headers.length).fill('New')] }) }, '+ Add Row')
                    )
                ),
                
                el('div', { className: 'data-table-preview', style: { margin: '30px 0', overflowX: 'auto', fontFamily: 'Barlow Condensed, sans-serif' }},
                    el('table', { style: { width: '100%', borderCollapse: 'separate', borderSpacing: 0, border: '2px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden' }},
                        el('thead', {},
                            el('tr', {},
                                attributes.headers.map(function(header, index) {
                                    return el('th', { key: index, style: { background: 'linear-gradient(135deg, #00ACF2, #0092CC)', color: 'white', padding: '16px', textAlign: 'left', fontSize: '15px', fontWeight: '800', textTransform: 'uppercase' }},
                                        el(RichText, { tagName: 'span', value: header, onChange: (v) => updateHeader(index, v) })
                                    );
                                })
                            )
                        ),
                        el('tbody', {},
                            attributes.rows.map(function(row, rowIndex) {
                                return el('tr', { key: rowIndex, style: { background: rowIndex % 2 === 0 ? 'white' : '#f8fafc' }},
                                    row.map(function(cell, colIndex) {
                                        return el('td', { key: colIndex, style: { padding: '14px 16px', fontSize: '15px', color: '#00668F', borderTop: '1px solid #e5e7eb', position: 'relative' }},
                                            el(RichText, { tagName: 'span', value: cell, onChange: (v) => updateCell(rowIndex, colIndex, v) }),
                                            colIndex === row.length - 1 && el(IconButton, { icon: 'trash', label: 'Remove', onClick: () => setAttributes({ rows: attributes.rows.filter((_, i) => i !== rowIndex) }), style: { position: 'absolute', top: '8px', right: '8px', color: '#F1370F' }})
                                        );
                                    })
                                );
                            })
                        )
                    )
                )
            ];
        },
        save: function() { return null; }
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);
