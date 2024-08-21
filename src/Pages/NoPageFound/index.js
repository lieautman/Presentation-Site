import { useContext } from "react"
import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { themeContext } from "../../Contexts/themeContext"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"
import { Box } from "@mui/material"
import NavigationContainer from "../../Navigation/NavigationContainer"

function NoPageFound() {
  const { t } = useTranslation()
  const matches = useMediaQuery("(min-width:600px)")
  const { currentTheme } = useContext(themeContext)

  return (
    <>
      <NavigationContainer />
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
            {t("Error.Page1.Title1")}
          </h1>
        </TypographyWithTheme>
      </Box>
    </>
  )
}

export default NoPageFound
