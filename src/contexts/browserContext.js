import { createContext } from "react"

export const browserContext = createContext({
  browserName: "",
  setBrowserName: () => {},
})
