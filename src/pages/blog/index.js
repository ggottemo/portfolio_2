import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

// Map all MDX nodes for blog pages
const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="Blog Posts">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/blog/${node.slug}`}>
                            {node.frontmatter.title}
                            </Link>
                            </h2>
                        <p>Posted: {node.frontmatter.datePublished}</p>
                        <p>Modified: {node.parent.modifiedTime}</p>
                        </article>
                       
                ))
            }
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