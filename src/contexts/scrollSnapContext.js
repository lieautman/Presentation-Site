import { createContext } from "react"

export const scrollSnapContext = createContext({
  scrollSnap: true,
  setScrollSnap: () => {},
})
