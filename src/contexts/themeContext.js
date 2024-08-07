import { createContext } from "react"
import { darkTheme } from "../Resources/Theme/theme"

export const themeContext = createContext({
  currentTheme: darkTheme,
  setCurrentTheme: () => {},
})
