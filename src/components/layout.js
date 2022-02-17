import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    } from '../styles/layout.module.css'
import Socials from './socials'
import cv from "./cv.pdf"

const Layout = ({  pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
         
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                             Home
                            </Link>
                        </li>

                    <li className={navLinkItem}>
                        <Link to="/blog" className={navLinkText}>
                            Blog
                            </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/projects" className={navLinkText}>
                            Projects
                            </Link>
                        </li>
                    <li className={navLinkItem}>
                        <a href={cv} download="Gottemoeller.pdf" className={navLinkText}> Resume </a>
                    </li>
                    <li className={navLinkItem}>
                        <Socials />
                    </li>
                </ul>
                </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}
export default Layout