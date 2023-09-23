import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { 
        type = 'PRO',
        pricebox = '$16.99',
        getstarted = 'Get Started',
        items = [],
        buttonColor = 'orange',
        innerBlocksContent
    } = attributes;

    return (
        <div {...useBlockProps.save()}>
            
            <InnerBlocks.Content />
            
			 
            

            
        </div>
    );
}
