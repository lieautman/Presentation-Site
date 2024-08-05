import { createContext } from "react"
import { darkTheme } from "../Resources/Theme/Theme"

export const themeContext = createContext({
  currentTheme: darkTheme,
  setCurrentTheme: () => {},
})
