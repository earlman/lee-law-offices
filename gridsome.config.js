// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
    siteName: 'Lee Law Offices',
    templates: {
        Translations: (node) => node.path
    },
    plugins: [

        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'content/**/*.md',
                typeName: 'Translations'
            }
        },
        {
            use: 'gridsome-plugin-i18n',
            options: {
                locales: [ // locales list
                    "en-us",
                    'es'
                ],
                pathAliases: { // path segment alias for each locales
                    'en-us': 'en',
                    'es': 'es'
                },
                fallbackLanguage: "en-us",
                defaultLocale: "en-us",
                messages: {} // Loading messages from main.ts
            }
        },
        // TODO: delete these bc they're loaded in Translations
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'content/en-us/practice-areas/*.md',
                typeName: 'PracticeAreas',
            },
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'content/en-us/people/*.md',
                typeName: 'People',
            },
        },
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
