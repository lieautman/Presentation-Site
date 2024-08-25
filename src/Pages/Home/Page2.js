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
import { IconButton, Typography } from "@mui/material"
import { ArrowDownward } from "@mui/icons-material"

function Page2() {
  const { t } = useTranslation()
  const { currentTheme } = useContext(themeContext)
  const { scrollSnap } = useContext(scrollSnapContext)
  const matches = useMediaQuery("(min-width:600px)")

  return (
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
                  This should be a <a href="https://github.com/lieautman">some link</a>
                </Trans>
              ),
            },
          ]}
        />
      </Box>
      <Box
        style={{
          width: "20%",
          display: "grid",
          position: "relative",
          alignItems: "center",
          textAlign: "center",
          left: "80%",
          top: "1%",
        }}>
        <Typography
          variant="h2"
          gutterBottom
          fontWeight={"fontWeightBold"}
          style={{
            color: currentTheme.colors.textOnLight,
            fontSize: matches ? currentTheme.fontSizes.h2 : currentTheme.fontSizesPhone.h2,
          }}>
          {t("ScrollFor").concat(" ", t("Nav.Pages.About"))}
        </Typography>
        <IconButton style={{ color: currentTheme.colors.textOnDark }}>
          <ArrowDownward
            style={{
              fontSize: currentTheme.fontSizesPhone.h1,
            }}
          />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Page2
