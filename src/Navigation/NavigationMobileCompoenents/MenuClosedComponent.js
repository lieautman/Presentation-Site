import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import { scrollSnapContext } from "../../Contexts/scrollSnapContext"
import GridItemAligned from "../../Resources/StyledComponents/GridItemAligned"
import { Grid, IconButton } from "@mui/material"
import { Menu } from "@mui/icons-material"
import { motion } from "framer-motion"

function MenuClosedComponent({ setMenuOpen }) {
  const { currentTheme } = useContext(themeContext)
  const { scrollSnap } = useContext(scrollSnapContext)

  return (
    <>
      <Grid
        container
        className={scrollSnap ? "scrollSnapSection" : ""}
        style={{ height: "9vh", backgroundColor: currentTheme.colors.primaryColor }}>
        <GridItemAligned item xs={6}>
          <IconButton
            aria-label="delete"
            style={{ color: currentTheme.colors.textOnDark }}
            onClick={() => setMenuOpen(true)}
            component={motion.div}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}>
            <Menu sx={{ fontSize: currentTheme.fontSizesPhone.h1 }} />
          </IconButton>
        </GridItemAligned>
        <GridItemAligned item xs={6}>
          <motion.img
            src={currentTheme.images.navBarThemeImage}
            alt="Logo"
            style={{
              height: currentTheme.logoSize,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          />
        </GridItemAligned>
      </Grid>
    </>
  )
}

export default MenuClosedComponent
