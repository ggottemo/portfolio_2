import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    first,
    second,
    third,
    fourth,
    end,
  

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
                <ul className={navLinks }>
                        <Link to="/" className={navLinkText}>
                        <li className={navLinkItem } id={first}>
                             Home
                             </li>
                            </Link>                        
                    <Link to="/blog" className={navLinkText }>
                    <li className={navLinkItem } id={second}>
                            Blog   
                    </li>
                    </Link>
                    {/* <Link to="/projects" className={navLinkText }>
                    <li className={navLinkItem } id={third}>
                            Projects
                        </li>
                        </Link> */}
                    <li className={navLinkItem } id={third}>
                        <a href={cv} download="Gottemoeller.pdf" className={navLinkText}> Resume </a>
                    </li>
                    <li id={end}>
                        <Socials  id={end} />
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