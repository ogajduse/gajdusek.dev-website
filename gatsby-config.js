module.exports = {
  siteMetadata: {
    title: `Ondřej Gajdušek`,
    description: `Ondřej Gajdušek website.`,
    author: `@sarkachwastkova`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `@import "${__dirname}/src/styles/styles";`,
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
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
        name: `ondra-web`,
        short_name: `website`,
        start_url: `/`,
        background_color: `#63D3C6`,
        theme_color: `#63D3C6`,
        display: `minimal-ui`,
        // icon: `src/images/icons/favicon96.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            subsets: [`latin-ext`],
            variants: [`300`, `400`, `700`, `800`],
          }
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: "UA-107062821-1",
      },
    },
  ],
}
