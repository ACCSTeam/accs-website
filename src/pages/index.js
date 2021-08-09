import * as React from "react"
import * as classes from "./index.module.css"
import Layout from "../layout"
import Seo from "../layout/seo"
import { FontIcon, PrimaryButton } from "@fluentui/react"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <div className={classes.root}>
      <Seo title="Home" />
      <StaticImage
        placeholder="blurred"
        layout="fixed"
        objectFit="contain"
        width={200}
        src="../images/ac-logo.png"
        alt="Logo"
      />
      <p className={classes.description}><strong>Content Synchronizer</strong> - Asetto Corsa launcher and utility for synchronizing content between the server and client</p>
      <PrimaryButton href="https://github.com/ACCSTeam/ACContentSynchronizer/releases/latest" className={classes.downloadButton}><FontIcon iconName="Download" /> Download</PrimaryButton>
    </div>
  </Layout>
)

export default IndexPage
