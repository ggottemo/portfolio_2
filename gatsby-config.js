module.exports = {
    siteMetadata: {
      title: `ggottemo`,
        siteUrl: `https://www.ggottemo.com`,
    },
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            },
        
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                plugins: [
                    'gatsby-remark-autolink-headers',
                    'gatsby-remark-prismjs',
                ],
        },
    }
],
}
        
    
