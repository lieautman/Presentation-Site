import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import { scrollSnapContext } from "../../Contexts/scrollSnapContext"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"
import { Box, Typography } from "@mui/material"
import { motion } from "framer-motion"

function Page2() {
  const { t } = useTranslation()
  const { currentTheme } = useContext(themeContext)
  const { scrollSnap } = useContext(scrollSnapContext)
  const matches = useMediaQuery("(min-width:600px)")

  return (
    <Box
      className={scrollSnap ? "scrollSnapSection" : ""}
      sx={{ backgroundColor: currentTheme.colors.secondaryColor, height: "100vh" }}>
      <Box
        sx={{
          height: "10vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: currentTheme.colors.primaryAccentsColor,
        }}>
        <Typography
          variant="h1"
          gutterBottom
          fontWeight={"fontWeightBold"}
          style={{
            color: currentTheme.colors.textOnDark,
            fontSize: matches ? currentTheme.fontSizes.h1 : currentTheme.fontSizesPhone.h1,
          }}
          component={motion.h1}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1 }}>
          {t("Home.Page2.Title1")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "25vh",
          backgroundColor: currentTheme.colors.primaryAccentsColor,
          height: "40vh",
        }}
        component={motion.div}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 1 }}>
        <Typography
          variant="p"
          gutterBottom
          style={{
            color: currentTheme.colors.textOnDark,
            fontSize: matches ? currentTheme.fontSizes.h3 : currentTheme.fontSizesPhone.h3,
          }}>
          {t("Home.Page2.Paragraph1")}
        </Typography>
        <Typography
          variant="p"
          gutterBottom
          style={{
            color: currentTheme.colors.textOnDark,
            fontSize: matches ? currentTheme.fontSizes.h3 : currentTheme.fontSizesPhone.h3,
          }}>
          {t("Home.Page2.Paragraph2")}
        </Typography>
        <Typography
          variant="p"
          gutterBottom
          style={{
            color: currentTheme.colors.textOnDark,
            fontSize: matches ? currentTheme.fontSizes.h3 : currentTheme.fontSizesPhone.h3,
          }}>
          {t("Home.Page2.Paragraph3")}
        </Typography>
        <Typography
          variant="p"
          gutterBottom
          style={{
            color: currentTheme.colors.textOnDark,
            fontSize: matches ? currentTheme.fontSizes.h3 : currentTheme.fontSizesPhone.h3,
          }}>
          {t("Home.Page2.Paragraph4")}
        </Typography>
      </Box>
    </Box>
  )
}

export default Page2
