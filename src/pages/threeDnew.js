import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import App from "../components/App"

const IndexPage = () => (
    <Layout>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Layout>
)
export const Head = () => (
    <Seo
      title="3D Viewer Carousel Page"
      description="Explore our 3D models in a carousel setup, featuring unique projects."
    />
  );
export default IndexPage
