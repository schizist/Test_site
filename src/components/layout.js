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
      <div  style={{
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

        {/* Content container */}
        <div
          style={{
            position: "relative",
            // backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent black`
            // top: "5%", 
            height: "90%", // Ensures it spans 90% of the viewport height
            zIndex: 2,
            width: "100%",
            maxWidth: "2900px", // Adjust to limit the max width
            margin: "0 auto",
            padding: "var(--size-gutter)",
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
