import * as styles from "../components/index.module.css"
import { useStaticQuery, graphql } from "gatsby"
import * as React from "react"
import Header from "./header"
import "./layout.css"
const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=HOME`

const moreLinks = [
  { 
    text: "Contact DCC", 
    url: "https://gatsby.dev/discord" 
  },
  { 
    text: "Github", 
    url: "https://github.com/schizist" 
  },
 
]

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      {/* Outer container */}
      <div
         style={{
          display: "flex",
          flexDirection: "column",
          // minHeight: "100vh",
         }}
      >
        {/* Background container */}
        <div
          style={{
            position: "relative",
            flexGrow: 1,
            minHeight: "100vh", // body container
            backgroundImage: "url(/bg2.png)",
            backgroundSize: "cover",
            backgroundPosition: "center-top",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            display: "flex",
            flexDirection: "row",
        }}
        >
          {/* Content container */}
          <div        
            style={{
              position: "relative",
              // height: "100%",
              zIndex: 2,
              width: "100%",
              marginLeft: "var(--size-gutter)",
              marginRight: "var(--size-gutter)",
              display: "flex",
              flexDirection: "column",
              // minHeight: "100vh",
            }}
          >
            <Header siteTitle={data.site.siteMetadata?.title || "Title"} />

          {/* Main content */} 
            <div style={{ marginBottom: "var(--space-5)" }}></div>
            <main>{children}</main>
            <div style={{ marginBottom: "var(--space-5)" }}></div>

          {/* Footer */} 
            <footer>
              <div
              className={styles.moreLinks}>
              {moreLinks.map((link, i) => (
                <React.Fragment key={link.url}>
                  <a href={`${link.url}${utmParameters}`}>{link.text}</a>
                  {i !== moreLinks.length - 1 && <> · </> }
                </React.Fragment>
              ))}
              </div>
              <div  style={{
                paddingTop: "1rem",
                textAlign: "center",
                // backgroundColor: "green",
                }}>
                  © {new Date().getFullYear()} &middot; DCC Illustration
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
