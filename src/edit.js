import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { ColorPalette, PanelBody, RangeControl} from '@wordpress/components';
import { __ } from "@wordpress/i18n";
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const { columns, } = attributes;

	const onChangeColumns = ( newColumns ) => {
		setAttributes({ columns: newColumns});
	};
	const onBackgroundColorChange = ( newBgColor ) => {
		setAttributes({ backgroundColor: newBgColor});
	};
	const onTextColorChange = ( newTextColor ) => {
		setAttributes({ textColor: newTextColor});
	};
	return (
		<div { ...useBlockProps({
			className:`has-${columns}-columns`,
		} ) }>
			<InspectorControls>
				<PanelBody>
					<RangeControl 
					label={ __('Columns', 'price-tables') }
					min={ 1 }
					max={ 6 } 
					onChange={onChangeColumns}
					value={ columns }
				/>
				
				</PanelBody>
			</InspectorControls>
			<InnerBlocks allowedBlocks={['blocks-course/price-block']}
			orientation="horizontal"
			template = { [
				['blocks-course/price-block'],
				['blocks-course/price-block'],
				['blocks-course/price-block'],
			] }
			/>
		</div>
	);
}
