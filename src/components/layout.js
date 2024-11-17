import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

// Import image dynamically
import bgImage from "../../static/bg2.png" // Adjust path as needed

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
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Overlay that only affects the background */}
        <div
          style={{
            position: "absolute",
            width: "90%",
            maxWidth: "2900px",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)", // Centers horizontally
            height: "100%", // Ensures it spans the full height
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent overlay
            zIndex: 1,
          }}
        />



        {/* Content container */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: "1200px", // Adjust to limit the max width
            margin: "0 auto",
            padding: "var(--size-gutter)",
          }}
        >
          <Header siteTitle={data.site.siteMetadata?.title || "Title"} />

          <main>{children}</main>

          <footer
            style={{
              textAlign: "center",
              marginTop: "var(--space-5)",
              fontSize: "var(--font-sm)",
            }}
          >
            © {new Date().getFullYear()} &middot; Your Site Name
          </footer>
        </div>
      </div>
    </>
  )
}

export default Layout
