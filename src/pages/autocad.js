import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AutoCAD = () => (
  <Layout>
    <h1>AutoCAD</h1>
    <Link to="/">HOME</Link>
  </Layout>
)

export const Head = () => <Seo title="AutoCad" />

export default AutoCAD
