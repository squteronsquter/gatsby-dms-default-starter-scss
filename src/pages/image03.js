import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Image03 = () => (
  <Layout>
    <Seo title="Tuscany" />
    <h1>Tuscany</h1>
    <StaticImage src="../images/natours-03.jpg" alt="Tuscany" />
  </Layout>
)

export default Image03
