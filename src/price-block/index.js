import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import "../yt-list-item"
import Edit from './edit';
import Save from './save';

registerBlockType('blocks-course/price-block', {
    title: __('Price Block', 'price-table'),
    description: __('A specific price block', 'price-table'),
    icon: 'table-col-after',
    parent: ['blocks-course/price-table'],
    supports: {
        reusable: false,
        html: false,
        color: {
            gradients: true,
            background: true,
        },
        spacing: {
            padding: true,
        },
    },
    attributes: {
        type: {
            type: 'string',
            source: 'html',
            selector: 'h4',
        },
        pricebox: {
            type: 'string',
            source: 'html',
            selector: 'h3',
        },
        getstarted: {
            type: 'string',
            source: 'html',
            selector: 'button',
        },
        buttonColor: {
            type: 'string',
            default: '#0073e5',
        },
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
