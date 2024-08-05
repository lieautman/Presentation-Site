import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import { scrollSnapContext } from "../../Contexts/scrollSnapContext"
import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { useTranslation } from "react-i18next"
import { Button, Switch } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"

const ScrollSnapChanger = () => {
  const { t } = useTranslation()
  const { currentTheme } = useContext(themeContext)
  const { scrollSnap, setScrollSnap } = useContext(scrollSnapContext)
  const matches = useMediaQuery("(min-width:600px)")
  return (
    <Button
      onClick={() => {
        setScrollSnap(!scrollSnap)
      }}
      sx={{ height: "9vh" }}>
      <TypographyWithTheme color={currentTheme.colors.textOnDark}>
        <h3
          style={{
            fontSize: matches ? currentTheme.fontSizes.h3 : currentTheme.fontSizesPhone.h2,
          }}>
          {t("Nav.ChangeScrollSnap.label")}
        </h3>
      </TypographyWithTheme>
      <Switch checked={scrollSnap} color="secondary" />
    </Button>
  )
}

export default ScrollSnapChanger
