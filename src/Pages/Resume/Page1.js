import BoxWithvh from "../../Resources/StyledComponents/BoxWithvh"
import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"
import { Typography } from "@mui/material"

function Resume() {
  const { t } = useTranslation()
  const { currentTheme } = useContext(themeContext)
  const matches = useMediaQuery("(min-width:600px)")

  return (
    <BoxWithvh
      height={91}
      sx={{
        backgroundImage: `url(${currentTheme.images.resumeFirstImage})`,
        backgroundSize: matches ? "100% 100%" : "150% 100%",
        backgroundPosition: "center",
        backgroundColor: `${currentTheme.colors.secondaryColor}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}>
      <Typography
        variant="h1"
        gutterBottom
        fontWeight={"fontWeightBold"}
        style={{
          color: currentTheme.colors.textOnLight,
          fontSize: matches ? currentTheme.fontSizes.h1 : currentTheme.fontSizesPhone.h1,
        }}>
        {t("Resume.Page1.Title1")}
      </Typography>
      <Typography
        variant="h2"
        gutterBottom
        fontWeight={"fontWeightBold"}
        style={{
          color: currentTheme.colors.textOnLight,
          fontSize: matches ? currentTheme.fontSizes.h2 : currentTheme.fontSizesPhone.h2,
        }}>
        {t("Resume.Page1.Title2")}
      </Typography>
    </BoxWithvh>
  )
}

export default Resume
