import React from "react"
import "normalize.css"
import { darkTheme } from "./src/theme"
import { ThemeProvider } from "@fluentui/react"

export const wrapRootElement = ({ element }) => (
  <>
    <ThemeProvider applyTo="body" theme={darkTheme}>
      {element}
    </ThemeProvider>
  </>
)
