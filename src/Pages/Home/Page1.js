import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"
import { Box, Typography } from "@mui/material"

function Page1() {
  const { t } = useTranslation()
  const { currentTheme } = useContext(themeContext)
  const matches = useMediaQuery("(min-width:600px)")

  return (
    <Box
      sx={{
        backgroundImage: `url(${currentTheme.images.homeFirstImage})`,
        backgroundSize: matches ? "100% 100%" : "150% 100%",
        backgroundPosition: "center",
        backgroundColor: `${currentTheme.colors.secondaryColor}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "91vh",
      }}>
      <Typography
        variant="h1"
        gutterBottom
        fontWeight={"fontWeightBold"}
        style={{
          color: currentTheme.colors.textOnLight,
          fontSize: matches ? currentTheme.fontSizes.h1 : currentTheme.fontSizesPhone.h1,
        }}>
        {t("Home.Page1.Title1")}
      </Typography>
      <Typography
        variant="h2"
        gutterBottom
        fontWeight={"fontWeightBold"}
        style={{
          color: currentTheme.colors.textOnLight,
          fontSize: matches ? currentTheme.fontSizes.h2 : currentTheme.fontSizesPhone.h2,
        }}>
        {t("Home.Page1.Title2")}
      </Typography>
    </Box>
  )
}

export default Page1
