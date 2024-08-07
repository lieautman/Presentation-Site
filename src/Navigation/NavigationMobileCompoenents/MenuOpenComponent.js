import LanguageChanger from "../LanguageChanger/LanguageChanger"
import ThemeChanger from "../ThemeChanger/ThemeChanger"
import ScrollSnapChanger from "../ScrollSnapChanger/ScrollSnapChanger"
import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { useTranslation } from "react-i18next"
import { MenuOpen } from "@mui/icons-material"
import { IconButton, Button, Grid } from "@mui/material"
import "../../Resources/Css/NavBarTransition.css"
import { motion } from "framer-motion"

function MenuOpenComponent({ setPageNo, setMenuOpen }) {
  const { t } = useTranslation()
  const { currentTheme } = useContext(themeContext)

  return (
    <>
      <Grid
        container
        className="scrollSnapSection"
        style={{
          height: "100vh",
          width: "50vw",
          zIndex: "100",
          animation: "0.25s ease-in 0s 1 slide",
          position: "absolute",
          backgroundColor: currentTheme.colors.secondaryAccentsColor,
        }}
        component={motion.div}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.05 }}>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "9vh" }}>
          <IconButton
            aria-label="delete"
            style={{ color: currentTheme.colors.textOnDark }}
            onClick={() => setMenuOpen(false)}
            component={motion.div}
            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.25 }}
            whileHover={{
              scale: 0.9,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.7 }}>
            <MenuOpen sx={{ fontSize: currentTheme.fontSizesPhone.h1 }} />
          </IconButton>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "9vh" }}>
          <Button
            onClick={() => {
              setPageNo(1)
              setMenuOpen(false)
            }}
            component={motion.div}
            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.25 }}
            whileHover={{
              scale: 0.9,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.7 }}>
            <TypographyWithTheme color={currentTheme.colors.textOnDark}>
              <h3
                style={{
                  fontSize: currentTheme.fontSizesPhone.h2,
                }}>
                {t("Nav.Pages.Home")}
              </h3>
            </TypographyWithTheme>
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "9vh" }}>
          <Button
            onClick={() => {
              setPageNo(2)
              setMenuOpen(false)
            }}
            component={motion.div}
            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.25 }}
            whileHover={{
              scale: 0.9,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.7 }}>
            <TypographyWithTheme color={currentTheme.colors.textOnDark}>
              <h3
                style={{
                  fontSize: currentTheme.fontSizesPhone.h2,
                }}>
                {t("Nav.Pages.About")}
              </h3>
            </TypographyWithTheme>
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "9vh" }}>
          <Button
            onClick={() => {
              setPageNo(3)
              setMenuOpen(false)
            }}
            component={motion.div}
            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.25 }}
            whileHover={{
              scale: 0.9,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.7 }}>
            <TypographyWithTheme color={currentTheme.colors.textOnDark}>
              <h3
                style={{
                  fontSize: currentTheme.fontSizesPhone.h2,
                }}>
                {t("Nav.Pages.Contact")}
              </h3>
            </TypographyWithTheme>
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "9vh" }}>
          <Button
            onClick={() => {
              setPageNo(4)
              setMenuOpen(false)
            }}
            component={motion.div}
            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.25 }}
            whileHover={{
              scale: 0.9,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.7 }}>
            <TypographyWithTheme color={currentTheme.colors.textOnDark}>
              <h3
                style={{
                  fontSize: currentTheme.fontSizesPhone.h2,
                }}>
                {t("Nav.Pages.Resume")}
              </h3>
            </TypographyWithTheme>
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "9vh" }}>
          <ThemeChanger />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "9vh" }}>
          <ScrollSnapChanger />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "9vh" }}>
          <LanguageChanger />
        </Grid>
      </Grid>
    </>
  )
}

export default MenuOpenComponent
