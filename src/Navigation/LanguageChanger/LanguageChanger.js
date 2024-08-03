import { useTranslation } from "react-i18next"
import { Select, MenuItem } from "@mui/material"
import { useContext } from "react"
import { ThemeContext } from "../../Resources/Theme/ThemeContext"
import useMediaQuery from "@mui/material/useMediaQuery"

const LanguageChanger = () => {
  const { currentTheme } = useContext(ThemeContext)
  const matches = useMediaQuery("(min-width:600px)")
  const { t, i18n } = useTranslation()
  const changeLang = (lng) => {
    i18n.changeLanguage(lng)
    document.documentElement.lang = lng
  }

  return (
    <>
      <Select
        value={i18n.language}
        sx={{
          color: currentTheme.colors.textColor,
          fontSize: matches ? currentTheme.fontSizes.h3 : currentTheme.fontSizesPhone.h2,
        }}>
        <MenuItem value={"en"} onClick={() => changeLang("en")}>
          {t("Nav.ChangeLanguage.English")}
        </MenuItem>
        <MenuItem value={"ro"} onClick={() => changeLang("ro")}>
          {t("Nav.ChangeLanguage.Romanian")}
        </MenuItem>
      </Select>
    </>
  )
}

export default LanguageChanger
