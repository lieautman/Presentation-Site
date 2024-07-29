import { createContext } from "react"

export const PageContext = createContext({
  pageNo: 1,
  setPageNo: (pageNo) => {},
})
