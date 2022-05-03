import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import {
    article,
    articleContainer,
    articleTitle,
    articleDate,
    articleModified,
} from '../../styles/blog.module.css'

// Map all MDX nodes for blog pages
const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="Blog Posts">
             <div className={articleContainer}>
            {
                
                data.allMdx.nodes.map((node) => (
                    <article key={node.id} className={article}>
                        <h2 className={articleTitle}>
                            <Link to={`/blog/${node.slug}`}>
                            {node.frontmatter.title}
                            </Link>
                            </h2>
                        <p className={articleDate}>Posted: {node.frontmatter.datePublished}</p>
                        <p className={articleModified}>Modified: {node.parent.modifiedTime}</p>
                        </article>
                      
                ))
               
            }
              </div> 
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___datePublished, order: DESC}) {
            nodes {
                frontmatter{
                    datePublished(formatString: "MMMM D, YYYY")
                    title
                }
                parent{
                    ... on File {
                        modifiedTime(formatString: "MMMM D, YYYY")
                    }
                }
                id
                slug
            }
        }
    }
`

export default BlogPage