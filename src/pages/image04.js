import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Image04 = () => (
  <Layout>
    <Seo title="Rocks in the Sea" />
    <h1>Rocks in the Sea</h1>
    <StaticImage src="../images/natours-04.jpg" alt="Rocks in the Sea" />
  </Layout>
)

export default Image04
