import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import { darkTheme, purpleTheme } from "../../Resources/Theme/Theme"
import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { useTranslation } from "react-i18next"
import { Button, Switch } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import { motion } from "framer-motion"

const ThemeChanger = () => {
  const { t } = useTranslation()
  const { currentTheme, setCurrentTheme } = useContext(themeContext)
  const matches = useMediaQuery("(min-width:600px)")
  return (
    <Button
      onClick={() => (currentTheme === darkTheme ? setCurrentTheme(purpleTheme) : setCurrentTheme(darkTheme))}
      sx={{ height: "9vh" }}
      component={motion.div}
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 1, x: -100 }}
      transition={{ duration: 0.25 }}
      whileHover={{
        scale: 0.9,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.7 }}>
      <TypographyWithTheme color={currentTheme.colors.textOnDark}>
        <h3
          style={{
            fontSize: matches ? currentTheme.fontSizes.h3 : currentTheme.fontSizesPhone.h2,
          }}>
          {t("Nav.ChangeTheme.label")}
        </h3>
      </TypographyWithTheme>
      <Switch checked={currentTheme === purpleTheme ? true : false} color="secondary" />
    </Button>
  )
}

export default ThemeChanger
