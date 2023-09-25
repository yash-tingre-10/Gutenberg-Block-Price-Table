import { useBlockProps, RichText } from '@wordpress/block-editor';
import { IconButton } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
    const { items } = attributes;

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
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <RichText
                            placeholder={__('Add Features', 'my-plugin')}
                            tagName='span'
                            onChange={(newContent) => onUpdateListItem(index, newContent)}
                            value={item.content}
                        />
                        <IconButton
                            icon='trash'
                            label={__('Delete Item', 'my-plugin')}
                            onClick={() => onRemoveListItem(index)}
                        />
                    </li>
                ))}
            </ul>

            <IconButton
                icon='plus-alt2'
                label={__('Add Item', 'my-plugin')}
                onClick={onAddListItem}
            />
        </div>
    );
}
