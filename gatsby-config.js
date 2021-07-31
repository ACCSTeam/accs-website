module.exports = {
  siteMetadata: {
    title: `Content Synchronizer`,
    description: `Launcher for Assetto Corsa game`,
    author: `@eone666`,
    // siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Content Synchronizer`,
        short_name: `ACCS`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ff0000`,
        display: `minimal-ui`,
        icon: `src/images/ac-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto:400,700,400i,700i`],
        display: "swap",
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-typescript-css-modules`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
