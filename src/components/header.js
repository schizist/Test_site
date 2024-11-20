import * as React from "react"
import { Link } from "gatsby"
import * as styles from "../components/index.module.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      position: "relative",
      maxHeight: "100vh",
      backgroundColor: "yellow",

      backgroundSize: "cover",
      backgroundPosition: "center top",
      backgroundRepeat: "no-repeat",
      display: "flex",
      flexDirection: "column",
      // maxWidth: "2900px"
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
        style={{ height: `50px`,
          display: 'flex',
         }} />
      <span 
        className={styles.monogram} 
        style={{ display: 'flex' }}>
        DC<b style={{color: 'var(--color-primary)'}}>C</b>
      </span>
    </Link>
  
  </header>
)

export default Header
