import * as styles from "../components/index.module.css"
import { useStaticQuery, graphql } from "gatsby"
import * as React from "react"
import Header from "./header"
import "./layout.css"
const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=HOME`

const moreLinks = [
  { 
    text: "Contact DCC", url: "https://gatsby.dev/discord" 
  },
  { 
    text: "Github", url: "https://github.com/schizist" 
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
  `)

  return (
    <>
      {/* Background container with image and overlay */}
      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
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
            // height: "100%",
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
              fontSize: "var(--font-sm)",
              // backgroundColor: "red",
            }}
          >
            <div className={styles.moreLinks}>
            {moreLinks.map((link, i) => (
              <React.Fragment key={link.url}>
                <a href={`${link.url}${utmParameters}`}>{link.text}</a>
                {i !== moreLinks.length - 1 && <> · </> }
              </React.Fragment>
            ))}
            </div>
            <div     style={{
              position: "absolute", // Allows precise positioning
              left: "50%", // Moves the element to the midpoint of the footer
              transform: "translateX(-50%)", // Centers the element horizontally
              top: "calc(100% + 0.5rem)", // Optional: Adjust vertical spacing if needed
              }}>
            © {new Date().getFullYear()} &middot; DCC Illustration
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Layout
