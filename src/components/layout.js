import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const backgroundImage = `/bg2.png`

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
          position: "relative",
          minHeight: "100vh",
          backgroundColor: "black",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {/* Overlay that only affects the background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 50,
            right: 0,
            bottom: 0,
            margin: "0 auto",
            width: 800,
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust opacity as needed
            zIndex: 1, // Place the overlay below the content
          }}
        />



        {/* Content container with higher z-index to sit above overlay */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: `var(--size-content)`,
              padding: `var(--size-gutter)`,
            }}
          >

            <main>{children}</main>
            
            <footer
              style={{ position: "center", 
                textAlign: "center",
                marginTop: `var(--space-5)`,
                fontSize: `var(--font-sm)`,
              }}
            >
              © {new Date().getFullYear()} &middot;
              {` `}
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
