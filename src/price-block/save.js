import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const {type,  pricebox,  specs,  getstarted, } = attributes;
	
	return (
		<div 
		{ ...useBlockProps.save() }>
			<RichText.Content tagName="h4" value={ type } />
            <RichText.Content tagName="h3" value={ pricebox } />
            <RichText.Content tagName="li" value={ specs } />
            <RichText.Content tagName="button" value={ getstarted } />
		</div>
	);
}