import { useContext } from "react"
import NavigationDesktopComponent from "./NavigationDesktopComponents/NavigationDesktopComponent"
import NavigationPhoneComponent from "./NavigationMobileCompoenents/NavigationPhoneComponent"
import { PageContext } from "./State/PageContext"
import useMediaQuery from "@mui/material/useMediaQuery"

function NavigationContainer() {
  const { setPageNo } = useContext(PageContext)
  const matches = useMediaQuery("(min-width:600px)")

  return matches ? (
    <NavigationDesktopComponent setPageNo={setPageNo} />
  ) : (
    <NavigationPhoneComponent setPageNo={setPageNo} />
  )
}

export default NavigationContainer
