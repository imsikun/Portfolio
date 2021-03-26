/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Subhs Portfolio',
    description: 'This is Subhakants Portfolio website',
    author: '@imsikun',
    twitterUsername: '@imsikun1',
    image: '/twitter-img.png',
    siteUrl: 'https://subhakant.netlify.app'
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000,
        contentTypes: [`jobs`, `projects`],
        singleTypes: [`about`]
      }
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto',
              variants: ['400', '700']
            },
            { family: 'Open Sans' }
          ]
        }
      }
    }
  ]
}
