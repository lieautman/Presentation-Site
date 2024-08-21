import React, { useState } from "react"
import Pages from "./Pages"
import { themeContext } from "./Contexts/themeContext"
import { scrollSnapContext } from "./Contexts/scrollSnapContext"
import ScrollbarWrapper from "./Resources/StyledComponents/ScrollbarWrapper"
import { purpleTheme } from "./Resources/Theme/theme"
import useMediaQuery from "@mui/material/useMediaQuery"
import "./Resources/Css/scrollSnap.css"

function App() {
  const [currentTheme, setCurrentTheme] = useState(purpleTheme)
  const [scrollSnap, setScrollSnap] = useState(true)
  const matches = useMediaQuery("(min-width:600px)")

  return (
    <ScrollbarWrapper display={matches}>
      <themeContext.Provider value={{ currentTheme, setCurrentTheme }}>
        <scrollSnapContext.Provider value={{ scrollSnap, setScrollSnap }}>
          <Pages />
        </scrollSnapContext.Provider>
      </themeContext.Provider>
    </ScrollbarWrapper>
  )
}

export default App
