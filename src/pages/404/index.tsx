import * as React from "react"
import Seo from "../../layout/seo"
import Layout from "../../layout"
import { PrimaryButton } from "@fluentui/react"
import { navigate } from "gatsby"
// @ts-ignore
import * as classes from "./404.module.css"

const NotFoundPage = () => (
  <Layout>
    <div className={classes.root}>
      <Seo title="404: Not found" />
      <h2>404: Not Found</h2>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <PrimaryButton onClick={()=>{navigate("/")}}>Back to home</PrimaryButton>
    </div>
  </Layout>
)

export default NotFoundPage
