// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
    siteName: 'Lee Law Offices',
    plugins: [
        // Load all Blog Posts from file system
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'content/practice-areas/*.md',
                typeName: 'PracticeAreas',
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
