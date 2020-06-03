module.exports = {
    base: '/splitterino/',
    title: 'Splitterino',
    description: 'Documentation for the splitterino Application',
    dest: './dist',
    themeConfig: {
        repo: 'prefixaut/splitterino',
        repoLabel: 'GitHub',
        docsRepo: 'prefixaut/splitterino-docs',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Improve this Page!',
        lastUpdated: 'Last Updated',
        sidebar: [
            '/',
            '/installation.md',
            '/building.md',
            '/usage.md',
            '/themes.md',
            {
                title: 'Customization',
                path: '/customize/',
                collapsable: false,
                children: [
                    '/themes.md',
                ]
            },
        ]
    }
};