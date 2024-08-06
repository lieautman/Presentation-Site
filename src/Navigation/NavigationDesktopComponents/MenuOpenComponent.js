import ThemeChanger from "../ThemeChanger/ThemeChanger"
import ScrollSnapChanger from "../ScrollSnapChanger/ScrollSnapChanger"
import LanguageChanger from "../LanguageChanger/LanguageChanger"
import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import { MenuOpen } from "@mui/icons-material"
import { IconButton, Grid } from "@mui/material"
import { motion } from "framer-motion"

function MenuOpenComponent({ setMenuOpen }) {
  const { currentTheme } = useContext(themeContext)

  return (
    <>
      <Grid
        container
        className="scrollSnapSection"
        style={{
          height: "auto",
          width: "16.66vw",
          zIndex: "100",
          position: "absolute",
          backgroundColor: currentTheme.colors.secondaryAccentsColor,
        }}
        component={motion.div}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.05 }}>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "9vh" }}>
          <IconButton
            aria-label="delete"
            style={{ color: currentTheme.colors.textOnDark }}
            onClick={() => setMenuOpen(false)}
            component={motion.div}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 1, x: -100 }}
            transition={{ duration: 0.25 }}
            whileHover={{
              scale: 0.9,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.7 }}>
            <MenuOpen sx={{ fontSize: currentTheme.fontSizes.h1 }} />
          </IconButton>
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
