import { useBlockProps, RichText, InspectorControls, PanelColorSettings,BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { Button, IconButton, PanelBody, ColorPicker, Toolbar } from '@wordpress/components';
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
        <div {...useBlockProps()}>

            


            <InspectorControls>
                <PanelColorSettings
                    title={__('Button Color', 'price-block')}
                    colorSettings={[
                        {
                            value: buttonColor,
                            onChange: (value) => setAttributes({ buttonColor: value }),
                            label: __('Select a color for the button', 'price-block'),
                        },
                    ]}
                />
            </InspectorControls>

            

            <RichText { ...useBlockProps( {
					className: `text-box-align-${ alignment }`,
				} ) }
                placeholder={__('PRO', 'price-block')}
                tagName='h4'
                onChange={onChangeType}
                value={type}
            />
        {/* Toolbar OPtions */}
            <BlockControls>
            <Toolbar>
                <IconButton
                    icon="arrow-up-alt2"
                    label={__('Move Up', 'my-plugin')}
                    onClick={moveBlockUp}
                />
                <IconButton
                    icon="arrow-down-alt2"
                    label={__('Move Down', 'my-plugin')}
                    onClick={moveBlockDown}
                />
                </Toolbar>
                
				<AlignmentToolbar
					value={ alignment }
					onChange={ onChangeAlignment }
				/>
			</BlockControls>

            {/* Toolbar options end here  */}

            <RichText 
                placeholder={__('$10.99', 'price-block')}
                tagName='h3'
                onChange={onChangePricebox}
                value={pricebox}
            />

            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <RichText
                            placeholder={__('Add Features', 'price-block')}
                            tagName='span'
                            onChange={(newContent) => onUpdateListItem(index, newContent)}
                            value={item.content}
                        />
                        <IconButton
                            icon='trash'
                            label={__('Delete Item', 'price-block')}
                            onClick={() => onRemoveListItem(index)}
                        />
                    </li>
                ))}
            </ul>

            <IconButton
                icon='plus-alt2'
                label={__('Add Item', 'price-block')}
                onClick={onAddListItem}
            />

            <RichText
                placeholder={__('Get Started', 'price-block')}
                tagName='button'
                onChange={onChangeGetstarted}
                value={getstarted}
                style={{ backgroundColor: buttonColor }}
                className="custom-button-class"
                id="my-get-started-button"
            />
        </div>
    );
}
