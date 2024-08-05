import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import { darkTheme, purpleTheme } from "../../Resources/Theme/Theme"
import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { useTranslation } from "react-i18next"
import { Button } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"

const ThemeChanger = () => {
  const { t } = useTranslation()
  const { currentTheme, setCurrentTheme } = useContext(themeContext)
  const matches = useMediaQuery("(min-width:600px)")
  return (
    <Button
      onClick={() => (currentTheme === darkTheme ? setCurrentTheme(purpleTheme) : setCurrentTheme(darkTheme))}
      sx={{ height: "9vh" }}>
      <TypographyWithTheme color={currentTheme.colors.textOnDark}>
        <h3
          style={{
            fontSize: matches ? currentTheme.fontSizes.h3 : currentTheme.fontSizesPhone.h2,
          }}>
          {t("Nav.ChangeTheme.label")}
        </h3>
      </TypographyWithTheme>
    </Button>
  )
}

export default ThemeChanger
