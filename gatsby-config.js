require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteTitle = process.env.GATSBY_WEBSITE_NAME;
const siteDescription =
  "A Gatsby starter with TypeScript, SEO, Styled Components, Prettier, PWA Support, Jest, and more.";
const siteAuthor = "@s_ayanide";
const siteUrl = process.env.GATSBY_WEBSITE_DOMAIN;
const siteImage = "logo-black.svg";
const siteKeywords = [
  "gatsby",
  "typescript",
  "starter",
  "javascript",
  "react",
  "prettier",
  "SEO",
  "eslint",
  "grand",
  "filesystem",
  "helmet",
  "sharp",
  "styled component",
  "axe",
];

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    author: siteAuthor,
    siteUrl: siteUrl,
    keywords: siteKeywords,
    image: siteImage,
    menuLinks: [
      {
        name: "rooms",
        anchor: "#rooms",
        translate: "nav.rooms.url",
      },
      {
        name: "gallery",
        anchor: "#gallery",
        translate: "nav.gallery.url",
      },
      {
        name: "services",
        anchor: "#services",
        translate: "nav.services.url",
      },
      {
        name: "drive",
        anchor: "#drive",
        translate: "nav.drive.url",
      },
      {
        name: "contact",
        anchor: "#contact",
        translate: "nav.contact.url",
      },
    ],
    phone: "(506) 2239-4339 / (506) 2239-1303",
    phoneRef: "+1-506-8705-4201",
    whatsapp: "https://wa.me/50687054201",
    messenger: "http://m.me/vistalagoarenal",
    facebook: "https://www.facebook.com/vistalagoarenal",
  },
  flags: {
    FAST_DEV: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
    PARALLEL_SOURCING: false,
    DEV_SSR: false,
  },
  plugins: [
    // The next two plugings (webpack-bundle-analyser-v2 && perf-budgets) should
    // be enabled only when working on performance:
    // "gatsby-plugin-webpack-bundle-analyser-v2",
    // "gatsby-plugin-perf-budgets",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-zopfli",
      options: {
        path: "zopfli",
        extensions: [
          "css",
          "html",
          "js",
          "json",
          "svg",
          "png",
          "jpg",
          "json",
          "woff2",
          "txt",
          "map",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GATSBY_GOOGLE_TAG_MANAGER,
        includeInDevelopment: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-csp`,
    //   options: {
    //     disableOnDev: true,
    //     reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
    //     mergeScriptHashes: false, // you can disable scripts sha256 hashes
    //     mergeStyleHashes: false, // you can disable styles sha256 hashes
    //     mergeDefaultDirectives: true,
    //     directives: {
    //       "style-src": "'self' 'unsafe-inline'",
    //       "frame-src":
    //         "'self' https://www.google.com/ https://www.facebook.com/ https://web.facebook.com/",
    //       "script-src":
    //         "'self' 'unsafe-inline' https://maps.googleapis.com/maps/api/js https://maps.googleapis.com/maps-api-v3/api/js/ https://connect.facebook.net/ https://www.googletagmanager.com/ https://www.facebook.com/",
    //       "script-src-elem":
    //         "'self' 'unsafe-inline' https://maps.googleapis.com/maps/api/js https://maps.googleapis.com/maps-api-v3/api/js/ https://www.googletagmanager.com/ http://www.googletagmanager.com/gtag/js https://connect.facebook.net/",
    //       "img-src": "'self' data: https://www.facebook.com/",
    //       "connect-src": "'self' https://www.google-analytics.com/g/collect",
    //       "prefetch-src":
    //         "'self' https://connect.facebook.net/ https://www.googletagmanager.com/ https://www.googletagmanager.com/gtag/js https://www.googletagmanager.com/gtm.js",
    //     },
    //   },
    // },
    "gatsby-transformer-json",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images/svg/`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -80,
        duration: 250,
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["jpg"],
          placeholder: "dominantColor",
          quality: 40,
          breakpoints: [576, 768, 992, 1200],
          backgroundColor: "transparent",
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: process.env.GATSBY_WEBSITE_DOMAIN,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: process.env.GATSBY_WEBSITE_NAME,
        short_name: process.env.GATSBY_WEBSITE_NAME,
        start_url: "/",
        background_color: "#81b29a",
        theme_color: "#fff",
        display: "standalone",
        icon: "src/images/maskable_icon_x1.png",
        icon_options: {
          purpose: "any maskable",
        },
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/"],
      },
    },
  ],
};
