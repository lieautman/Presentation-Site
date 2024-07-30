import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { useContext } from "react"
import { ThemeContext } from "../../Resources/Theme/ThemeContext"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"

function Page1() {
  const { t } = useTranslation()
  const { currentTheme } = useContext(ThemeContext)
  const matches = useMediaQuery("(min-width:600px)")

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${currentTheme.images.contactFirstImage})`,
          backgroundSize: matches ? "100% 100%" : "150% 100%",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "91vh",
        }}>
        <TypographyWithTheme color={currentTheme.colors.titleColor}>
          <h1
            style={{
              fontSize: matches ? currentTheme.fontSizes.h1 : currentTheme.fontSizesPhone.h1,
            }}>
            {t("Contact.Page1.Title1")}
          </h1>
        </TypographyWithTheme>
      </Box>
    </>
  )
}

export default Page1
