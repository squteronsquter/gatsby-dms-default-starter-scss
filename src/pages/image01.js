import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Image01 = () => (
  <Layout>
    <Seo title="Deep Blue Sea" />
    <h1>Deep Blue Sea</h1>
    <StaticImage src="../images/natours-01.jpg" alt="Deep Blue Sea" />
  </Layout>
)

export default Image01
