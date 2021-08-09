import { Stylesheet, InjectionMode } from "@fluentui/merge-styles"
import React from "react"

export const replaceRenderer = ({ setHeadComponents }) => {
  const stylesheet = Stylesheet.getInstance()

  stylesheet.setConfig({
    injectionMode: InjectionMode.none,
    namespace: "",
  })

  setHeadComponents([
    <style dangerouslySetInnerHTML={{ __html: stylesheet.getRules(true) }} />,
  ])
}
