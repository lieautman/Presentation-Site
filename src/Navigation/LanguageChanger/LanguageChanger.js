import { useTranslation } from "react-i18next"
import { Select, MenuItem } from "@mui/material"
import { useContext } from "react"
import { themeContext } from "../../contexts/themeContext"
import useMediaQuery from "@mui/material/useMediaQuery"

const LanguageChanger = () => {
  const { currentTheme } = useContext(themeContext)
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
          fontSize: matches ? currentTheme.fontSizes.h3 : currentTheme.fontSizesPhone.h2,
          color: currentTheme.colors.textColor,
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(228, 219, 233, 0.25)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(228, 219, 233, 0.25)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(228, 219, 233, 0.25)",
          },
          ".MuiSvgIcon-root ": {
            fill: "white !important",
          },
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
