import { useContext } from "react"
import NavigationDesktopComponent from "./NavigationDesktopComponents/NavigationDesktopComponent"
import NavigationPhoneComponent from "./NavigationMobileCompoenents/NavigationPhoneComponent"
import { pageContext } from "../contexts/pageContext"
import useMediaQuery from "@mui/material/useMediaQuery"

function NavigationContainer() {
  const { setPageNo } = useContext(pageContext)
  const matches = useMediaQuery("(min-width:600px)")

  return matches ? (
    <NavigationDesktopComponent setPageNo={setPageNo} />
  ) : (
    <NavigationPhoneComponent setPageNo={setPageNo} />
  )
}

export default NavigationContainer
