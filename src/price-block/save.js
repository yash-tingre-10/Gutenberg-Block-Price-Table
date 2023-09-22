import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { 
        type = 'PRO',
        pricebox = '$16.99',
        getstarted = 'Get Started',
        items = [],
        buttonColor = 'orange',
        alignment = 'right'
    } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <RichText.Content { ...useBlockProps.save( {
				className: `text-box-align-${ alignment }`,
			} ) }
			 tagName="h4" value={type} />
			 
            <RichText.Content 
			tagName="h3" value={pricebox} />
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <RichText.Content tagName="span" value={item.content} />
                    </li>
                ))}
            </ul>
            <RichText.Content tagName="button" value={getstarted} style={{ backgroundColor: buttonColor }} />
        </div>
    );
}
