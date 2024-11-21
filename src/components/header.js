import * as React from "react";
import { Link } from "gatsby";
import * as styles from "../components/index.module.css";

const headheight = "6em"
const Header = ({ siteTitle }) => (
  <header
    style={{
      alignItems: "center", // Vertically center the children
      display: "flex",
      padding: "0 1em",  // Add padding for spacing
      borderRadius: "1em 1em 1em 1em", // Rounded corners on the bottom
      position: "relative",
      height: headheight, // Set the header height
      backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black
      // backgroundColor: "yellow",
     
    }}
  >
    <Link
      to="/"
      style={{
        textDecoration: `none`,
        // display: 'flex',

      }}
    >
      {/* <img 
        src={require("../../src/images/dumbLogo.png").default}
        alt={siteTitle} 
        style={{ 
          height: headheight, // Ensure the logo takes up the full height of the header

        }} 
      />   */}
      <span 
        className={styles.monogram} 
        style={{ 
          // display: 'flex',
          // fontSize: "300%",
        }}
      >
        DC<b style={{ color: 'var(--color-primary)' }}>C</b>
      </span>
    </Link>
  </header>
);

export default Header;
