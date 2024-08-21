import React, { useState } from "react"
import Pages from "./Pages"
import { themeContext } from "./Contexts/themeContext"
import { scrollSnapContext } from "./Contexts/scrollSnapContext"
import { purpleTheme } from "./Resources/Theme/theme"
import "./Resources/Css/scrollSnap.css"

function App() {
  const [currentTheme, setCurrentTheme] = useState(purpleTheme)
  const [scrollSnap, setScrollSnap] = useState(true)

  return (
    <themeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <scrollSnapContext.Provider value={{ scrollSnap, setScrollSnap }}>
        <Pages />
      </scrollSnapContext.Provider>
    </themeContext.Provider>
  )
}

export default App
