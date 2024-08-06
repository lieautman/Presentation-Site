import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import { scrollSnapContext } from "../../Contexts/scrollSnapContext"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"
import { Box } from "@mui/material"
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
          textAlign: "center",
          backgroundColor: currentTheme.colors.primaryAccentsColor,
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
          marginTop: "25vh",
          textAlign: "center",
          backgroundColor: currentTheme.colors.primaryAccentsColor,
          height: "40vh",
        }}>
        <TypographyWithTheme color={currentTheme.colors.textOnDark}>
          <h3
            style={{
              fontSize: matches ? currentTheme.fontSizes.h3 : currentTheme.fontSizesPhone.p,
            }}>
            {t("Home.Page2.Paragraph1")}
          </h3>
          <h3
            style={{
              fontSize: matches ? currentTheme.fontSizes.p : currentTheme.fontSizesPhone.p,
            }}>
            {t("Home.Page2.Paragraph2")}
          </h3>
          <h3
            style={{
              fontSize: matches ? currentTheme.fontSizes.p : currentTheme.fontSizesPhone.h3,
            }}>
            {t("Home.Page2.Paragraph3")}
          </h3>
          <h3
            style={{
              fontSize: matches ? currentTheme.fontSizes.p : currentTheme.fontSizesPhone.p,
            }}>
            {t("Home.Page2.Paragraph4")}
          </h3>
        </TypographyWithTheme>
      </Box>
    </Box>
  )
}

export default Page2
