import Page1 from "./Page1"
import Page2 from "./Page2"
import { NextPage } from "../Components/NextPage"
import NavigationContainer from "../../Navigation/NavigationContainer"
import useMediaQuery from "@mui/material/useMediaQuery"
import ScrollbarWrapper from "../../Resources/StyledComponents/ScrollbarWrapper"

function About() {
  const matches = useMediaQuery("(min-width:600px)")

  return (
    <ScrollbarWrapper display={matches}>
      <NavigationContainer />
      <Page1 />
      <Page2 />
      <NextPage route={"contact"} />
    </ScrollbarWrapper>
  )
}

export default About
