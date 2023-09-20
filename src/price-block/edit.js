import { useBlockProps, RichText } from '@wordpress/block-editor';
import { PanelBody, ColorPalette } from '@wordpress/components';
import { __ } from '@wordpress/i18n';


export default function Edit( { attributes, setAttributes } ) {
    const {type, pricebox, specs, getstarted, } = attributes;
    const onChangeType = (newType) =>{
        setAttributes({type:newType})
    }
    
    const onChangePricebox = (newPricebox) =>{
        setAttributes({pricebox:newPricebox})
    }
    
    const onChangeSpecs = (newSpecs) =>{
        setAttributes({specs:newSpecs})
    }
    
    const onChangeGetstarted = (newGetstarted) =>{
        setAttributes({getstarted:newGetstarted})
    }
    
	return( 
        
        <div{...useBlockProps()}
        >

        <RichText
            placeholder={__('PRO', 'price-block')}
            tagName='h4'
            onChange={onChangeType}
            value={ type }
        />
        
        <RichText
            placeholder={__('$10.99', 'price-block')}
            tagName='h3'
            onChange={onChangePricebox}
            value={ pricebox }
        />
      
        
        <RichText
            placeholder={__('Add Features', 'price-block')}
            tagName='li'
            onChange={onChangeSpecs}
            value={ specs }
        />
        
        <RichText
            placeholder={__('Get Started', 'price-block')}
            tagName='button'
            onChange={onChangeGetstarted}
            value={ getstarted }
        />
        </div>
        
        )
}