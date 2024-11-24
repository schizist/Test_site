import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* Background container with image and overlay */}
      <div
        style={{
          position: 'relative',
          minHeight: '105vh',
          backgroundImage: 'url(/bg2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center-top',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          display: 'flex',
          flexDirection: 'row',  
       }}
      >

        {/* Content container */}
        <div        
          style={{
            position: "relative",
            height: "100%",
            zIndex: 2,
            width: "100%",
            marginLeft: "var(--size-gutter)",
            marginRight: "var(--size-gutter)",
          }}
        >
          <Header siteTitle={data.site.siteMetadata?.title || "Title"} />
          <div style={{ marginBottom: "var(--space-5)" }}></div>

          <main>{children}</main>

          <footer
            style={{
              textAlign: "center",
              marginTop: "var(--space-5)",
              fontSize: "var(--font-sm)",
              // color: "var(--color-text)",
              backgroundColor: "red",
            }}
          >
            © {new Date().getFullYear()} &middot; DCC Illustration
          </footer>
        </div>
      </div>
    </>
  )
}

export default Layout
