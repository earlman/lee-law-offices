// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
    siteName: 'Lee Law Offices',
    templates: {
        People: (node) => {
            return node.path;
        },
        Translations: (node) => node.path,
    },
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');
        svgRule.uses.clear();
        svgRule.use('vue-svg-loader').loader('vue-svg-loader');
    },
    plugins: [
        {
            use: 'gridsome-plugin-flexsearch',
            options: {
                searchFields: ['name', 'locale', 'type'],
                collections: [
                    {
                        typeName: 'Translations',
                        indexName: 'People',
                        fields: ['name', 'title', 'pic', 'path', 'filename'],
                    },
                ],
            },
        },
        // Load all Blog Posts from file system
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: '**/*.md',
                baseDir: './content',
                typeName: 'Translations',
            },
        },
        // Load all Blog Posts from file system
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: '**/people/*.md',
                baseDir: './content',
                typeName: 'People',
            },
        },
        {
            use: 'gridsome-plugin-i18n',
            options: {
                locales: [
                    // locales list
                    'en-us',
                    'es',
                ],
                pathAliases: {
                    // path segment alias for each locales
                    'en-us': 'en-us',
                    es: 'es',
                },
                fallbackLanguage: 'en-us',
                defaultLocale: 'en-us',
            },
        },
        // TODO: delete these bc they're loaded in Translations
        // {
        //     use: '@gridsome/source-filesystem',
        //     options: {
        //         path: 'content/en-us/practice-areas/*.md',
        //         typeName: 'PracticeAreas',
        //     },
        // },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'content/en-us/*.md',
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
