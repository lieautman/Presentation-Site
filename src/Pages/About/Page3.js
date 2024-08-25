import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import { scrollSnapContext } from "../../Contexts/scrollSnapContext"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import DetailsCarousel from "../Components/DetailsCarousel/DetailsCarousel"
import AboutPage3CarouselItem6 from "../../Resources/Images/AboutPage3CarouselItem6.jpg"
import AboutPage3CarouselItem5 from "../../Resources/Images/AboutPage3CarouselItem5.jpg"
import AboutPage3CarouselItem4 from "../../Resources/Images/AboutPage3CarouselItem4.jpg"
import AboutPage3CarouselItem3 from "../../Resources/Images/AboutPage3CarouselItem3.jpg"
import AboutPage3CarouselItem2 from "../../Resources/Images/AboutPage3CarouselItem2.jpg"
import AboutPage3CarouselItem1 from "../../Resources/Images/AboutPage3CarouselItem1.jpg"
import { motion } from "framer-motion"

function Page3() {
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
            height: matches ? "10vh" : "15vh",
          }}>
          <TypographyWithTheme color={currentTheme.colors.textOnDark}>
            <motion.h1
              style={{
                fontSize: matches ? currentTheme.fontSizes.h1 : currentTheme.fontSizesPhone.h1,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1 }}>
              {t("About.Page3.Title1")}
            </motion.h1>
          </TypographyWithTheme>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: matches ? "15vh" : "5vh",
            textAlign: "center",
            backgroundColor: `${currentTheme.colors.primaryAccentsColor}`,
            height: matches ? "60vh" : "75vh",
          }}>
          <DetailsCarousel
            items={[
              {
                image: AboutPage3CarouselItem6,
                header: t("About.Page3.Carousel.item6.header"),
                text: t("About.Page3.Carousel.item6.text"),
              },
              {
                image: AboutPage3CarouselItem5,
                header: t("About.Page3.Carousel.item5.header"),
                text: t("About.Page3.Carousel.item5.text"),
              },
              {
                image: AboutPage3CarouselItem4,
                header: t("About.Page3.Carousel.item4.header"),
                text: t("About.Page3.Carousel.item4.text"),
              },
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

export default Page3
