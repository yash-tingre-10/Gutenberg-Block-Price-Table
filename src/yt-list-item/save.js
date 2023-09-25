import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { items } = attributes;

    return (
        <ul {...useBlockProps.save()}>
            {items.map((item, index) => (
                <li key={index}>
                    <RichText.Content tagName="span" value={item.content} />
                </li>
            ))}
        </ul>
    );
};

export default Save;
