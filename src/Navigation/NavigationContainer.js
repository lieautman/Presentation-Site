import NavigationDesktopComponent from "./NavigationDesktopComponents/NavigationDesktopComponent"
import NavigationPhoneComponent from "./NavigationMobileCompoenents/NavigationPhoneComponent"
import useMediaQuery from "@mui/material/useMediaQuery"

function NavigationContainer() {
  const matches = useMediaQuery("(min-width:600px)")

  return matches ? <NavigationDesktopComponent /> : <NavigationPhoneComponent />
}

export default NavigationContainer
