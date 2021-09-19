import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Image02 = () => (
  <Layout>
    <Seo title="High Cliff" />
    <h1>High Cliff</h1>
    <StaticImage src="../images/natours-02.jpg" alt="High Cliff" />
  </Layout>
)

export default Image02
