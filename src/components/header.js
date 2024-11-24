import * as React from "react";
import { Link } from "gatsby";
import * as styles from "../components/index.module.css";

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/"
          style={{textDecoration: 'none',}}>

      {/* <img 
        src={require("../../src/images/dumbLogo.png").default}
        alt={siteTitle} 
        style={{ 
          height: headheight, // Ensure the logo takes up the full height of the header
        }} 
      />   */}

      <span className={styles.monogram} >
        DC<b style={{ color: 'var(--color-primary)',}}>C</b>
      </span>
    </Link>
  </header>
);

export default Header;
