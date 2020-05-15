require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require("path")

module.exports = {
  siteMetadata: {
    title: `WP GraphQL Test`,
    description: `Test WP GraphQL`,
    author: `@warlock-mw`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(`${__dirname}/src/images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        exclude: [
          `/404`,
          `/404.html`,
        ],
      }
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `${process.env.SITE_URL}`,
        sitemap: `${process.env.SITE_URL}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: path.resolve(`${__dirname}/src/utils/typography`),
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: `${process.env.WORDPRESS_URL}`,
        protocol: `${process.env.WORDPRESS_PROTOCOL}`,
        restApiRoutePrefix: "wp-json",
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: [],
        /*
        auth: {
          htaccess_user: "your-htaccess-username",
          htaccess_pass: "your-htaccess-password",
          htaccess_sendImmediately: false,

          jwt_user: process.env.JWT_USER,
          jwt_pass: process.env.JWT_PASSWORD,
          jwt_base_path: "/jwt-auth/v1/token", 
        },
        */
        cookies: {},
        verboseOutput: false,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
        // excludedRoutes: ["**/posts/1456"],
        keepMediaSizes: true,
      },
    },
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, 
        develop: false,
        tailwind: true,
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['slick-carousel/slick/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    }
  ],
}
