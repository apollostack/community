const themeOptions = require('gatsby-theme-apollo-docs/theme-options');

module.exports = {
  pathPrefix: '/docs/community',
  plugins: [
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        ...themeOptions,
        root: __dirname,
        subtitle: 'Community',
        description: 'Get involved the Apollo Community',
        contentDir: 'source',
        githubRepo: 'apollographql/community',
        sidebarCategories: {
          null: [
            'index',
            'contributing',
            'code-of-conduct',
            'graphql-events',
            'apollo-mission-briefing'
          ]
        }
      }
    }
  ]
};
