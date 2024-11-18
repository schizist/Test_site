import * as React from "react"
import { Link } from "gatsby"
import * as styles from "../components/index.module.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      display: `flex`,
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
