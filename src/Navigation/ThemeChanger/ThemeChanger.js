import { useContext } from "react"
import { ThemeContext } from "../../Resources/Theme/ThemeContext"
import { darkTheme, lightTheme } from "../../Resources/Theme/Theme"
import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { useTranslation } from "react-i18next"
import { Button } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"

const ThemeChanger = () => {
  const { t } = useTranslation()
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext)
  const matches = useMediaQuery("(min-width:600px)")
  return (
    <Button onClick={() => (currentTheme === darkTheme ? setCurrentTheme(lightTheme) : setCurrentTheme(darkTheme))}>
      <TypographyWithTheme color={currentTheme.colors.textColor}>
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
