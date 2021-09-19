import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => (
  <Layout>
    <Seo title="Contact" />
    <h1>How to get in touch with us</h1>
    <StaticImage
      src="../images/road.jpeg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Forest Road"
    />
  </Layout>
)

export default Contact
