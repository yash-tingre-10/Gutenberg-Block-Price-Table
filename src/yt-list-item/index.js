import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';

registerBlockType('my-plugin/my-block', {
    title: 'Custom List YT',
    icon: 'list-view',
    category: 'common',
    attributes: {
        items: {
            type: 'array',
            default: [],
            source: 'query',
            selector: 'ul li',
            query: {
                content: {
                    type: 'string',
                    source: 'html',
                    selector: 'span',
                },
            },
        },
    },
    edit: Edit,
    save: Save,
});
