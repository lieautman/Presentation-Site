import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { useContext } from "react"
import { ThemeContext } from "../../Resources/Theme/ThemeContext"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import DetailsCarousel from "./DetailsCarousel/DetailsCarousel"

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
            marginTop: "15vh",
            textAlign: "center",
            backgroundColor: `${currentTheme.colors.secondaryColor}`,
            height: "60vh",
          }}>
          <DetailsCarousel
            items={[
              {
                image: "aaa",
                header: t("About.Page2.Carousel1.item2.header"),
                text: t("About.Page2.Carousel1.item2.text"),
              },
              {
                image: "bbb",
                header: t("About.Page2.Carousel1.item1.header"),
                text: t("About.Page2.Carousel1.item1.text"),
              },
            ]}
          />
        </Box>
      </Box>
    </>
  )
}

export default Page2