import { useContext } from "react"
import { ThemeContext } from "../../Resources/Theme/ThemeContext"
import { darkTheme, lightTheme } from "../../Resources/Theme/Theme"
import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import GridItemAligned from "../../Resources/StyledComponents/GridItemAligned"
import { Grid } from "@mui/material"
import { useTranslation } from "react-i18next"
import { Button } from "@mui/material"

const ThemeChanger = () => {
  const { t } = useTranslation()
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext)
  return (
    <Button onClick={() => (currentTheme === darkTheme ? setCurrentTheme(lightTheme) : setCurrentTheme(darkTheme))}>
      <TypographyWithTheme color={currentTheme.colors.textColor}>
        <h3
          style={{
            fontSize: currentTheme.fontSizes.h3,
          }}>
          {t("Nav.ChangeTheme.label")}
        </h3>
      </TypographyWithTheme>
    </Button>
  )
}

export default ThemeChanger
