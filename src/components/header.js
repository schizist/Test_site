import * as React from "react"
import { Link } from "gatsby"
import * as styles from "../components/index.module.css"


const headheight = "2em"
const Header = ({ siteTitle }) => (
  <header
  style={{
    position: "relative",
    height: headheight, // Ensure the header has consistent height
    backgroundColor: "yellow",
    display: "flex",
    alignItems: "center",  // Vertically centers the children
    padding: "0 1em",  // Add some padding for spacing
  }}
  >
    <Link
      to="/"
      style={{
        textDecoration: `none`,
        display: 'flex',
      }}
    >
      <img 
        src={require("../../src/images/dumbLogo.png").default}
        alt={siteTitle} 
        style={{ 
          height: '100%',
          display: 'flex',
          alignItems: 'center',
         }} />  
      <span 
        className={styles.monogram} 
        style={{ 
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          marginLeft: '0',
         }}>
        DC<b style={{color: 'var(--color-primary)'}}>C</b>
      </span>
    </Link>
  
  </header>
)

export default Header
