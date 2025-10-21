module.exports = {
  siteMetadata: {
    title: `Gatsby TÉQOURT Ecommerce Theme`,
    siteUrl: `https://jamm.matter.design`,
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `YOUR_STRAPI_API_URL`,
        collectionTypes: [`product`, `article`, `user`],
        queryLimit: 1000,
      },
    },
  ],
};
