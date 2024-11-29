import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import App from "../components/App"

const New = () => (
    <Layout>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Layout>
)
export const Head = () => <Seo title="New" />
export default New
