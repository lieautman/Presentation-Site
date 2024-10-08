import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"

function Page1({ divRef, scrollSnap }) {
  const { t } = useTranslation()
  const { currentTheme } = useContext(themeContext)
  const matches = useMediaQuery("(min-width:600px)")

  return (
    <>
      <Box
        ref={divRef}
        className={scrollSnap ? "scrollSnapSection" : ""}
        sx={{
          backgroundImage: `url(${currentTheme.images.aboutFirstImage})`,
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
            {t("About.Page1.Title1")}
          </h1>
        </TypographyWithTheme>
      </Box>
    </>
  )
}

export default Page1
