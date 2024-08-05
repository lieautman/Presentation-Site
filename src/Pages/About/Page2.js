import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import { browserContext } from "../../Contexts/browserContext"
import { inputContext } from "../../Contexts/inputContext"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import DetailsCarousel from "./DetailsCarousel/DetailsCarousel"
import AboutPage2CarouselItem3 from "../../Resources/Images/AboutPage2CarouselItem3.jpg"
import AboutPage2CarouselItem2 from "../../Resources/Images/AboutPage2CarouselItem2.jpg"
import AboutPage2CarouselItem1 from "../../Resources/Images/AboutPage2CarouselItem1.jpg"

function Page2() {
  const { t } = useTranslation()
  const { currentTheme } = useContext(themeContext)
  const { browser } = useContext(browserContext)
  const { input } = useContext(inputContext)
  const matches = useMediaQuery("(min-width:600px)")

  return (
    <>
      <Box
        className={browser !== "Chrome" && input !== "mouse" ? "scrollSnapSection" : ""}
        sx={{
          backgroundColor: `${currentTheme.colors.secondaryColor}`,
          height: "100vh",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: `${currentTheme.colors.primaryAccentsColor}`,
            height: "10vh",
          }}>
          <TypographyWithTheme color={currentTheme.colors.textOnDark}>
            <h1
              style={{
                fontSize: matches ? currentTheme.fontSizes.h1 : currentTheme.fontSizesPhone.h1,
              }}>
              {t("About.Page2.Title1")}
            </h1>
          </TypographyWithTheme>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "15vh",
            textAlign: "center",
            backgroundColor: `${currentTheme.colors.primaryAccentsColor}`,
            height: "60vh",
          }}>
          <DetailsCarousel
            items={[
              {
                image: AboutPage2CarouselItem3,
                header: t("About.Page2.Carousel.item3.header"),
                text: t("About.Page2.Carousel.item3.text"),
              },
              {
                image: AboutPage2CarouselItem2,
                header: t("About.Page2.Carousel.item2.header"),
                text: t("About.Page2.Carousel.item2.text"),
              },
              {
                image: AboutPage2CarouselItem1,
                header: t("About.Page2.Carousel.item1.header"),
                text: t("About.Page2.Carousel.item1.text"),
              },
            ]}
          />
        </Box>
      </Box>
    </>
  )
}

export default Page2
