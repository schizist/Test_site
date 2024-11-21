import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
const links = [
  {
    text: "threeD",
    url: "threeD",
    description:
      "Some examples of my 3D work.",
  },
  {
    text: "Fusion 360",
    url: "new",
    description:
      "A collection of my AutoCAD wor",
  },
  {
    text: "Blender",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Code",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]


const moreLinks = [
  { 
    text: "Contact DCC", url: "https://gatsby.dev/discord" 
  },
  { 
    text: "Github", url: "https://github.com/schizist" 
  },
 
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=HOME`

const IndexPage = () => (
  <Layout>
    <div style={{ position: "relative",
          minHeight: "100vh",
          borderRadius: "1em 1em 1em 1em", // Rounded corners on the bottom
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black
          // backgroundColor: "red",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          padding: "var(--size-gutter)",
          }}>
      <div className={styles.textCenter}>
        <StaticImage

          loading="Loadign"
          width={64}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        
      </div>

      <div>
      <p  className={styles.general}>
        TO DO: 
        <br/>
        link indeed, linkedin,  make splash screen, 
      </p>
      </div>

      <ul className={styles.list}>
        {links.map(link => (
          <li key={link.url} className={styles.listItem}>
            <a
              className={styles.listItemLink}
              href={`${link.url}${utmParameters}`}
            >
              {link.text}
            </a>
            <p className={styles.listItemDescription}>{link.description}</p>
          </li>
        ))}
      </ul>
      
      <div className={styles.moreLinks}>
      {moreLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <a href={`${link.url}${utmParameters}`}>{link.text}</a>
          {i !== moreLinks.length - 1 && <> · </> }
        </React.Fragment>
      ))}
      </div>
   </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
