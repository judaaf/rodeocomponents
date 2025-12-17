(function(blocks, element, blockEditor, components) {
    const el = element.createElement;
    const { registerBlockType } = blocks;
    const { InspectorControls, RichText } = blockEditor;
    const { PanelBody, Button, IconButton } = components;
    
    registerBlockType('rodeo/tabs', {
        title: 'Tabs',
        icon: 'index-card',
        category: 'rodeo-blocks',
        attributes: {
            tabs: {
                type: 'array',
                default: [
                    { title: 'Overview', content: 'General information goes here.' },
                    { title: 'Benefits', content: 'Key benefits and advantages.' },
                    { title: 'FAQs', content: 'Common questions answered.' }
                ]
            },
            activeTab: { type: 'number', default: 0 }
        },
        
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            function updateTab(index, key, value) {
                const newTabs = [...attributes.tabs];
                newTabs[index][key] = value;
                setAttributes({ tabs: newTabs });
            }
            
            return [
                el(InspectorControls, {},
                    el(PanelBody, { title: 'Tab Settings', initialOpen: true },
                        el('p', {}, attributes.tabs.length + ' tabs'),
                        el(Button, { isPrimary: true, onClick: () => setAttributes({ tabs: [...attributes.tabs, { title: 'New Tab', content: 'Content here.' }] }) }, '+ Add Tab')
                    )
                ),
                
                el('div', { className: 'tabs-preview', style: { margin: '30px 0', fontFamily: 'Barlow Condensed, sans-serif' }},
                    el('div', { style: { display: 'flex', gap: '8px', borderBottom: '2px solid #e5e7eb', marginBottom: '24px' }},
                        attributes.tabs.map(function(tab, index) {
                            return el('button', { 
                                key: index, 
                                onClick: () => setAttributes({ activeTab: index }),
                                style: { 
                                    padding: '14px 28px', 
                                    border: 'none', 
                                    background: attributes.activeTab === index ? 'linear-gradient(135deg, #00ACF2, #0092CC)' : 'transparent',
                                    color: attributes.activeTab === index ? 'white' : '#00668F',
                                    fontSize: '16px',
                                    fontWeight: '800',
                                    textTransform: 'uppercase',
                                    borderRadius: '12px 12px 0 0',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    fontFamily: 'inherit'
                                }
                            },
                                el(RichText, { tagName: 'span', value: tab.title, onChange: (v) => updateTab(index, 'title', v), style: { color: 'inherit' }}),
                                el(IconButton, { icon: 'trash', label: 'Remove', onClick: () => setAttributes({ tabs: attributes.tabs.filter((_, i) => i !== index), activeTab: 0 }), style: { position: 'absolute', top: '4px', right: '4px', color: '#F1370F', fontSize: '12px' }})
                            );
                        })
                    ),
                    el('div', { style: { background: '#f8fafc', border: '2px solid #e5e7eb', borderRadius: '12px', padding: '28px' }},
                        el(RichText, { tagName: 'div', value: attributes.tabs[attributes.activeTab]?.content || '', onChange: (v) => updateTab(attributes.activeTab, 'content', v), placeholder: 'Tab content...', style: { fontSize: '17px', color: '#00668F', lineHeight: 1.7 }})
                    )
                )
            ];
        },
        save: function() { return null; }
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);
