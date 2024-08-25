import Page1 from "./Page1"
import Page2 from "./Page2"
import NextPage from "../Components/NextPage"
import NavigationContainer from "../../Navigation/NavigationContainer"
import useMediaQuery from "@mui/material/useMediaQuery"
import ScrollbarWrapper from "../../Resources/StyledComponents/ScrollbarWrapper"
import { useTranslation } from "react-i18next"

function Home() {
  const matches = useMediaQuery("(min-width:600px)")
  const { t } = useTranslation()

  return (
    <ScrollbarWrapper display={matches}>
      <NavigationContainer />
      <Page1 />
      <Page2 />
      <NextPage route={"about"} text={t("Nav.Pages.About")} />
    </ScrollbarWrapper>
  )
}

export default Home
