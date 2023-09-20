import { registerBlockType } from '@wordpress/blocks';
import "./price-block";
import './style.scss';

import Edit from './edit';
import save from './save';

registerBlockType( 'blocks-course/price-table', {
	edit: Edit,
	save,
} );
