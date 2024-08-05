import React, { useEffect, useState } from "react"
import NavigationContainer from "./Navigation/NavigationContainer"
import Pages from "./Pages"
import { pageContext } from "./Contexts/pageContext"
import { themeContext } from "./Contexts/themeContext"
import { scrollSnapContext } from "./Contexts/scrollSnapContext"
import ScrollbarWrapper from "./Resources/StyledComponents/ScrollbarWrapper"
import { darkTheme } from "./Resources/Theme/Theme"
import useMediaQuery from "@mui/material/useMediaQuery"
import "./Resources/Css/scrollSnap.css"

function App() {
  const [pageNo, setPageNo] = useState(1)
  const [currentTheme, setCurrentTheme] = useState(darkTheme)
  const [scrollSnap, setScrollSnap] = useState(true)
  const matches = useMediaQuery("(min-width:600px)")

  return (
    <ScrollbarWrapper display={matches}>
      <pageContext.Provider value={{ pageNo, setPageNo }}>
        <themeContext.Provider value={{ currentTheme, setCurrentTheme }}>
          <scrollSnapContext.Provider value={{ scrollSnap, setScrollSnap }}>
            <NavigationContainer />
            <Pages pageNo={pageNo} />
          </scrollSnapContext.Provider>
        </themeContext.Provider>
      </pageContext.Provider>
    </ScrollbarWrapper>
  )
}

export default App
