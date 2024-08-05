import React, { useEffect, useState } from "react"
import NavigationContainer from "./Navigation/NavigationContainer"
import Pages from "./Pages"
import { pageContext } from "./Contexts/pageContext"
import { themeContext } from "./Contexts/themeContext"
import { browserContext } from "./Contexts/browserContext"
import ScrollbarWrapper from "./Resources/StyledComponents/ScrollbarWrapper"
import { darkTheme } from "./Resources/Theme/Theme"
import useMediaQuery from "@mui/material/useMediaQuery"

function App() {
  const [pageNo, setPageNo] = useState(1)
  const [currentTheme, setCurrentTheme] = useState(darkTheme)
  const [browser, setBrowser] = useState("Other")
  const matches = useMediaQuery("(min-width:600px)")

  useEffect(() => {
    const userAgent = navigator.userAgent
    if (/Chrome/.test(userAgent) && !/Edg/.test(userAgent) && !/OPR/.test(userAgent)) {
      setBrowser("Chrome")
    } else if (/Edg/.test(userAgent)) {
      setBrowser("Edge")
    } else if (/OPR/.test(userAgent)) {
      setBrowser("Opera")
    } else {
      setBrowser("Other")
    }
  }, [])

  return (
    <ScrollbarWrapper display={matches}>
      <pageContext.Provider value={{ pageNo, setPageNo }}>
        <themeContext.Provider value={{ currentTheme, setCurrentTheme }}>
          <browserContext.Provider value={{ browser, setBrowser }}>
            <NavigationContainer />
            <Pages pageNo={pageNo} />
          </browserContext.Provider>
        </themeContext.Provider>
      </pageContext.Provider>
    </ScrollbarWrapper>
  )
}

export default App
