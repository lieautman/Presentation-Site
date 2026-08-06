import React, { useState } from "react"
import Pages from "./Pages"
import { themeContext } from "./contexts/themeContext"
import { scrollSnapContext } from "./contexts/scrollSnapContext"
import { ToastContainer } from "react-toastify"
import { purpleTheme } from "./Resources/Theme/theme"
import "react-toastify/dist/ReactToastify.css"
import "./Resources/Css/scrollSnap.css"

function App() {
  const [currentTheme, setCurrentTheme] = useState(purpleTheme)
  const [scrollSnap, setScrollSnap] = useState(true)

  return (
    <themeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <scrollSnapContext.Provider value={{ scrollSnap, setScrollSnap }}>
        <Pages />
        <ToastContainer />
      </scrollSnapContext.Provider>
    </themeContext.Provider>
  )
}

export default App
