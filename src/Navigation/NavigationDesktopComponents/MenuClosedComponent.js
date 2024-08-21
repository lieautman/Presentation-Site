import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import { scrollSnapContext } from "../../Contexts/scrollSnapContext"
import GridItemAligned from "../../Resources/StyledComponents/GridItemAligned"
import { Grid, IconButton, Button } from "@mui/material"
import { Menu } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

function MenuClosedComponent({ setMenuOpen }) {
  const { t } = useTranslation()
  const { currentTheme } = useContext(themeContext)
  const { scrollSnap } = useContext(scrollSnapContext)
  const navigate = useNavigate()

  return (
    <Grid
      container
      className={scrollSnap ? "scrollSnapSection" : ""}
      style={{ height: "9vh", backgroundColor: currentTheme.colors.primaryColor }}>
      <GridItemAligned item xs={2}>
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
          <Menu sx={{ fontSize: currentTheme.fontSizes.h1 }} />
        </IconButton>
      </GridItemAligned>
      <GridItemAligned item xs={2}>
        <Button
          onClick={() => navigate("/home")}
          component={motion.div}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
          whileHover={{
            scale: 0.9,
            transition: { duration: 0.3 },
          }}>
          <TypographyWithTheme color={currentTheme.colors.textOnDark}>
            <h3 style={{ fontSize: currentTheme.fontSizes.h3 }}>{t("Nav.Pages.Home")}</h3>
          </TypographyWithTheme>
        </Button>
      </GridItemAligned>
      <GridItemAligned item xs={2}>
        <Button
          onClick={() => navigate("/about")}
          component={motion.div}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
          whileHover={{
            scale: 0.9,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.7 }}>
          <TypographyWithTheme color={currentTheme.colors.textOnDark}>
            <h3 style={{ fontSize: currentTheme.fontSizes.h3 }}>{t("Nav.Pages.About")}</h3>
          </TypographyWithTheme>
        </Button>
      </GridItemAligned>
      <GridItemAligned item xs={2}>
        <Button
          onClick={() => navigate("/contact")}
          component={motion.div}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
          whileHover={{
            scale: 0.9,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.7 }}>
          <TypographyWithTheme color={currentTheme.colors.textOnDark}>
            <h3 style={{ fontSize: currentTheme.fontSizes.h3 }}>{t("Nav.Pages.Contact")}</h3>
          </TypographyWithTheme>
        </Button>
      </GridItemAligned>
      <GridItemAligned item xs={2}>
        <Button
          onClick={() => navigate("/resume")}
          component={motion.div}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
          whileHover={{
            scale: 0.9,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.7 }}>
          <TypographyWithTheme color={currentTheme.colors.textOnDark}>
            <h3 style={{ fontSize: currentTheme.fontSizes.h3 }}>{t("Nav.Pages.Resume")}</h3>
          </TypographyWithTheme>
        </Button>
      </GridItemAligned>
      <GridItemAligned item xs={2}>
        <motion.img
          src={currentTheme.images.navBarThemeImage}
          alt="Logo"
          style={{
            width: "auto",
            height: currentTheme.logoSize,
          }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
          initial={{ opacity: 0, y: -20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
        />
      </GridItemAligned>
    </Grid>
  )
}

export default MenuClosedComponent
