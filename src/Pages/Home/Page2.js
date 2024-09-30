import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import { scrollSnapContext } from "../../Contexts/scrollSnapContext"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Trans, useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import DetailsCarousel from "../Components/DetailsCarousel/DetailsCarousel"
import { motion } from "framer-motion"
import HomePage2CarouselItem1 from "../../Resources/Images/HomePage2CarouselItem1.jpg"
import HomePage2CarouselItem2 from "../../Resources/Images/HomePage2CarouselItem2.jpg"
import HomePage2CarouselItem3 from "../../Resources/Images/HomePage2CarouselItem3.jpg"
import {} from "../Components/NextPage"

function Page2({ divRef, scrollSnap }) {
  const { t } = useTranslation()
  const { currentTheme } = useContext(themeContext)
  const { scrollSnap1 } = useContext(scrollSnapContext)
  const matches = useMediaQuery("(min-width:600px)")

  return (
    <Box
      ref={divRef}
      className={scrollSnap1 || scrollSnap ? "scrollSnapSection" : ""}
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
            {t("Home.Page2.Title1")}
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
          height: matches ? "60vh" : "65vh",
        }}>
        <DetailsCarousel
          items={[
            {
              image: HomePage2CarouselItem1,
              header: t("Home.Page2.Carousel.item1.header"),
              text: (
                <Trans i18nKey="Home.Page2.Carousel.item1.text">
                  a
                  <a href="https://github.com/lieautman" target="blank">
                    {" "}
                  </a>
                </Trans>
              ),
            },
            {
              image: HomePage2CarouselItem2,
              header: t("Home.Page2.Carousel.item2.header"),
              text: (
                <Trans i18nKey="Home.Page2.Carousel.item2.text">
                  a
                  <a href="https://www.totalsoft.ro/en/solutions/industries/leasing" target="blank">
                    {" "}
                  </a>
                </Trans>
              ),
            },
            {
              image: HomePage2CarouselItem3,
              header: t("Home.Page2.Carousel.item3.header"),
              text: (
                <Trans i18nKey="Home.Page2.Carousel.item3.text">
                  a
                  <a href="https://github.com/osstotalsoft/rocket-ui-ts" target="blank">
                    {" "}
                  </a>
                </Trans>
              ),
            },
          ]}
        />
      </Box>
    </Box>
  )
}

export default Page2
