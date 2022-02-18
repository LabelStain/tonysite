import React from 'react'
import { graphl, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.css'
import vimLogo from './vim2.png'
import linklog from './linkedlogo.png'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
                    <div className={footerStyles.icons}>
            <a href="https://vimeo.com/user164749592">
            <img className={footerStyles.icon} src={vimLogo} alt="gitLogo" />
            </a>
            <a href="https://www.linkedin.com/in/tony-tewes-02b271230/">
            <img className={footerStyles.icon} src={linklog} alt="linkLogo" />

            </a>

            </div>
            <p>Created by {data.site.siteMetadata.author}, © 2020</p>
        </footer>
    )
}

export default Footer
