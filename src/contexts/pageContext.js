import { createContext } from "react"

export const pageContext = createContext({
  pageNo: 1,
  setPageNo: (pageNo) => {},
})
