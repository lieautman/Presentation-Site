import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { useContext } from "react"
import { ThemeContext } from "../../Resources/Theme/ThemeContext"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"

function Page2() {
  const { t } = useTranslation()
  const { currentTheme } = useContext(ThemeContext)
  const matches = useMediaQuery("(min-width:600px)")

  return (
    <>
      <Box
        className="scrollSnapSection"
        sx={{
          backgroundColor: `${currentTheme.colors.primaryAccentsColor}`,
          height: "100vh",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: `${currentTheme.colors.secondaryColor}`,
            height: "10vh",
          }}>
          <TypographyWithTheme color={currentTheme.colors.titleColor}>
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
            marginTop: "25vh",
            textAlign: "center",
            backgroundColor: `${currentTheme.colors.secondaryColor}`,
            height: "40vh",
          }}></Box>
      </Box>
    </>
  )
}

export default Page2
