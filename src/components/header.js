import * as React from "react"
import { Link } from "gatsby"
import bgImage from "../../static/bg2.png" // Adjust path as needed

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      <img src={require("../../src/images/dumbLogo.png").default} alt={siteTitle} style={{ height: `50px` }} />
    </Link>
  
  </header>
)

export default Header
