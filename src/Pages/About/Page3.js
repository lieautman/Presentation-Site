import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import { scrollSnapContext } from "../../Contexts/scrollSnapContext"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import DetailsCarousel from "./DetailsCarousel/DetailsCarousel"
import AboutPage3CarouselItem3 from "../../Resources/Images/AboutPage3CarouselItem3.jpg"
import AboutPage3CarouselItem2 from "../../Resources/Images/AboutPage3CarouselItem2.jpg"
import AboutPage3CarouselItem1 from "../../Resources/Images/AboutPage3CarouselItem1.jpg"

function Page2() {
  const { t } = useTranslation()
  const { currentTheme } = useContext(themeContext)
  const { scrollSnap } = useContext(scrollSnapContext)
  const matches = useMediaQuery("(min-width:600px)")

  return (
    <>
      <Box
        className={scrollSnap ? "scrollSnapSection" : ""}
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
              {t("About.Page3.Title1")}
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
          {" "}
          <DetailsCarousel
            items={[
              {
                image: AboutPage3CarouselItem3,
                header: t("About.Page3.Carousel.item3.header"),
                text: t("About.Page3.Carousel.item3.text"),
              },
              {
                image: AboutPage3CarouselItem2,
                header: t("About.Page3.Carousel.item2.header"),
                text: t("About.Page3.Carousel.item2.text"),
              },
              {
                image: AboutPage3CarouselItem1,
                header: t("About.Page3.Carousel.item1.header"),
                text: t("About.Page3.Carousel.item1.text"),
              },
            ]}
          />
        </Box>
      </Box>
    </>
  )
}

export default Page2
