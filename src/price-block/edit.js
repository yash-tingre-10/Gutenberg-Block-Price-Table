import { useBlockProps, RichText, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { Button, IconButton, PanelBody, ColorPicker } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
    const { type, pricebox, getstarted, items, buttonColor,  } = attributes;

    const onChangeType = (newType) => {
        setAttributes({ type: newType });
    };

    const onChangePricebox = (newPricebox) => {
        setAttributes({ pricebox: newPricebox });
    };

    const onChangeSpecs = (newSpecs) => {
        setAttributes({ specs: newSpecs });
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

            <RichText
                placeholder={__('PRO', 'price-block')}
                tagName='h4'
                onChange={onChangeType}
                value={type}
            />

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
