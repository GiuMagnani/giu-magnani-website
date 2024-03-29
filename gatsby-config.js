const config = require("./data/SiteConfig");
const { ACTIVE_ENV, CONTEXT } = process.env;

let activeEnv = ACTIVE_ENV;

if (!activeEnv || CONTEXT === "branch-deploy") {
  activeEnv = "development";
}

if (CONTEXT === "branch-deploy") {
  activeEnv = "branch-deploy";
}

require("dotenv").config({
  path: ".env",
});

const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    title: config.siteTitle,
    author: config.userName,
    rssMetadata: {
      site_url: config.siteUrl + pathPrefix,
      feed_url: config.siteUrl + pathPrefix + config.siteRss,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${config.siteUrl + pathPrefix}/icons/logo-512x512.png`,
      author: config.userName,
      copyright: config.copyright,
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.giumagnani.com",
        sitemap: "https://www.giumagnani.com/sitemap.xml",
        resolveEnv: () => activeEnv,
        env: {
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/csv`,
        name: `csv`,
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
        prefixDefault: false,
        pagesPaths: [`${__dirname}/content`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: config.googleAnalyticsID,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-tagmanager`,
    //   options: {
    //     id: "GTM-5N3JW72",
    //     // Include GTM in development.
    //     // Defaults to false meaning GTM will only be loaded in production.
    //     includeInDevelopment: false,
    //     // Specify optional GTM environment details.
    //     // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
    //     // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
    //   },
    // },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitle,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        icons: [
          {
            src: "/icons/giu-magnani-logo-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/giu-magnani-logo-256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/icons/giu-magnani-logo-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    `gatsby-transformer-csv`,
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-image",
    "gatsby-remark-copy-linked-files",
    "gatsby-plugin-netlify",
  ],
};
