
    module.exports = {
      siteMetadata: {
        title: `Gatsby TÉQOURT Ecommerce Theme`,
        siteUrl: `https://jamm.matter.design`,
      },
      plugins: [
        {
          resolve: `gatsby-source-strapi`,
          options: {
           strapiUrl: `https://brilliant-animal-98dc2f4517.strapiapp.com`,
           contentTypes: [`product`, `article`],
           queryLimit: 1000,
         },
       },
       `gatsby-plugin-image`,
       `gatsby-plugin-react-helmet`,
       `gatsby-plugin-sitemap`,
       `gatsby-plugin-sharp`,
       `gatsby-transformer-sharp`,
       {
         resolve: 'gatsby-plugin-manifest',
         options: {
           icon: 'src/assets/favicon.png',
         },
       },
     ],
    };
    