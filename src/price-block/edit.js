import { useBlockProps, RichText, InspectorControls, PanelColorSettings,BlockControls, AlignmentToolbar, InnerBlocks } from '@wordpress/block-editor';
import { Button, IconButton, PanelBody, ColorPicker, Toolbar, Dashicon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
    const { 
        type = 'PRO',
        pricebox = '$16.99',
        getstarted = 'Get Started',
        items = [],
        buttonColor = 'orange',
        alignment = 'right'
    } = attributes;
      

    const onChangeType = (newType) => {
        setAttributes({ type: newType });
    };

    const onChangePricebox = (newPricebox) => {
        setAttributes({ pricebox: newPricebox });
    };


    const onChangeGetstarted = (newGetstarted) => {
        setAttributes({ getstarted: newGetstarted });
    };

    const onAddListItem = () => {
        const newItems = [...items, { content: '' }];
        setAttributes({ items: newItems });
    };

    const onRemoveListItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setAttributes({ items: newItems });
    };

    const onUpdateListItem = (index, content) => {
        const newItems = [...items];
        newItems[index].content = content;
        setAttributes({ items: newItems });
    };

    const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	};


    const moveBlockUp = () => {
    // Ill be adding logic here soon 
  };

  
  const moveBlockDown = () => {
    // Ill be adding logic here soon 
  };


    return (
        <div {...useBlockProps({  })}>

            <InnerBlocks
                allowedBlocks={['core/heading', 'core/list', 'core/paragraph', 'core/buttons','core/list-item', 'my-plugin/my-block']}
                template={[
                    ['core/heading', { level: 3, content: 'FREE', align: 'center' }],
                    ['core/paragraph', { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', fontSize: 'small' }],
                    ['core/heading', { level: 1, content: '$20.99', align: 'center' }],
                    ['core/paragraph', { content: 'Spectra Pro Includes:', fontSize: 'small' }],
                    ['core/list', { placeholder: 'Enter list items...' },
                        [
                            ['core/list-item', { placeholder: 'Predefined Item 1' }],
                            ['core/list-item', { placeholder: 'Predefined Item 2' }],
                            ['core/list-item', { placeholder: 'Predefined Item 3' }]
                        ]
                    ],
                    ['my-plugin/my-block'],
                    ['core/buttons', {
                        text: 'Notify Me / Your Text',
                        align: 'center',
                        size: 'small',
                    }],
                ]}
            />

            



            
            
        </div>
    );
}
