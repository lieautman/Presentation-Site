import React, { useEffect, useState } from "react"
import NavigationContainer from "./Navigation/NavigationContainer"
import Pages from "./Pages"
import { pageContext } from "./Contexts/pageContext"
import { themeContext } from "./Contexts/themeContext"
import { browserContext } from "./Contexts/browserContext"
import { inputContext } from "./Contexts/inputContext"
import ScrollbarWrapper from "./Resources/StyledComponents/ScrollbarWrapper"
import { darkTheme } from "./Resources/Theme/Theme"
import useMediaQuery from "@mui/material/useMediaQuery"

function App() {
  const [pageNo, setPageNo] = useState(1)
  const [currentTheme, setCurrentTheme] = useState(darkTheme)
  const [browser, setBrowser] = useState("Other")
  const [input, setInput] = useState("Other")
  const matches = useMediaQuery("(min-width:600px)")

  function browserDetection() {
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
  }

  function inputDetection() {
    const html = document.getElementById("html")
    const handleMouseMove = () => {
      setInput("mouse")
    }

    const handleTouchStart = () => {
      setInput("touch")
    }

    html.addEventListener("mousemove", handleMouseMove)
    html.addEventListener("touchstart", handleTouchStart)
  }

  useEffect(() => {
    browserDetection()
    inputDetection()
  }, [])

  return (
    <ScrollbarWrapper display={matches}>
      <pageContext.Provider value={{ pageNo, setPageNo }}>
        <themeContext.Provider value={{ currentTheme, setCurrentTheme }}>
          <browserContext.Provider value={{ browser, setBrowser }}>
            <inputContext.Provider value={{ input, setInput }}>
              <NavigationContainer />
              <Pages pageNo={pageNo} />
            </inputContext.Provider>
          </browserContext.Provider>
        </themeContext.Provider>
      </pageContext.Provider>
    </ScrollbarWrapper>
  )
}

export default App
