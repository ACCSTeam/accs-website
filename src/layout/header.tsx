import { Stack } from "@fluentui/react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
// @ts-ignore
import * as classes from "./layout.module.css"
import { NavBar } from "./navbar"

interface IProps {
  siteTitle: string
}

const Header = ({ siteTitle = "" }: IProps) => (
  <header>
    <Stack
      tokens={{ padding: 20 }}
      horizontalAlign="space-between"
      verticalAlign="center"
      horizontal
    >
      <Link to="/" className={classes.siteLink}>
        <Stack verticalAlign="center" tokens={{ childrenGap: 20 }} horizontal>
          <StaticImage
            placeholder="blurred"
            layout="fixed"
            objectFit="contain"
            height={40}
            src="../images/ac-logo.png"
            alt="Logo"
          />
          <h1 className={classes.siteName}>{siteTitle.toUpperCase()}</h1>
        </Stack>
      </Link>
      <NavBar />
    </Stack>
  </header>
)

export default Header
