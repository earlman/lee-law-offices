// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
    siteName: 'Lee Law Offices',
    templates: {
        People: '/employee/:name',
    },
    plugins: [
        {
            use: 'gridsome-plugin-flexsearch',
            options: {
                searchFields: ['name'],
                collections: [
                    {
                        typeName: 'People',
                        indexName: 'People',
                        fields: ['name', 'title', 'pic'],
                    },
                ],
            },
        },
        // Load all Blog Posts from file system
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'content/practice-areas/*.md',
                typeName: 'PracticeAreas',
            },
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'content/people/*.md',
                typeName: 'People',
            },
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'content/*.md',
                typeName: 'PageContent',
            },
        },

        // Netlify CMS Plugin
        {
            use: `gridsome-plugin-netlify-cms`,
            options: {
                publicPath: `/admin`,
            },
        },
    ],

    transformers: {
        remark: {
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
            anchorClassName: 'icon icon-link',
            plugins: [
                // ...global plugins
            ],
        },
    },
};
