import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import CallToActionBtn from "../components/CallToActionBtn"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>outdoors is where life happens</h1>
    <CallToActionBtn />
    <StaticImage
      src="../images/road.jpeg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Forest Road"
    />
  </Layout>
)

export default IndexPage
