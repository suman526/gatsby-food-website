/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Wow Food`,
    description: `Ukrainian style coffee shop and bakery`,
    author: `Anna Gapyuk`,
  },
  plugins: [`gatsby-plugin-sass`,
            `gatsby-background-image`,
            `gatsby-link`,
            `gatsby-transformer-sharp`,
            `gatsby-plugin-sharp`,
            `gatsby-image`,
            `gatsby-plugin-gatsby-cloud`,
            `gatsby-plugin-react-helmet`,
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `images`,
                path: `${__dirname}/src/images`,
              },
            },
            `gatsby-plugin-image`,
            // `gatsby-source-contentful`,
             {
              resolve: `gatsby-plugin-manifest`,
              options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/image3.jpg`, // This path is relative to the root of the site.
              },
            },
             {
              resolve: `gatsby-source-contentful`,
              options: {
                spaceId: `7lv1inygrdsu`,
                accessToken: `Tz49w2FmQxVkrOlmdaQhdWUvSCO-dansYIUc8wshrwQ`,
              },
             }, 
],
}
