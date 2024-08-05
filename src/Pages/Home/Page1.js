import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"
import { Box } from "@mui/material"

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
      <TypographyWithTheme color={currentTheme.colors.textOnLight}>
        <h1
          style={{
            fontSize: matches ? currentTheme.fontSizes.h1 : currentTheme.fontSizesPhone.h1,
          }}>
          {t("Home.Page1.Title1")}
        </h1>
      </TypographyWithTheme>
      <TypographyWithTheme color={currentTheme.colors.textOnLight}>
        <h2
          style={{
            fontSize: matches ? currentTheme.fontSizes.h2 : currentTheme.fontSizesPhone.h2,
          }}>
          {t("Home.Page1.Title2")}
        </h2>
      </TypographyWithTheme>
    </Box>
  )
}

export default Page1
