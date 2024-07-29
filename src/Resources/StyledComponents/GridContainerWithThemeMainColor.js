import { styled } from "@mui/material"
import Grid from "@mui/material/Grid"
import { useContext } from "react"
import { ThemeContext } from "../Theme/ThemeContext"

const GridContainerWithThemeMainColor = (props) => {
  const { currentTheme } = useContext(ThemeContext)

  const GridStyled = styled(Grid)`
    background-color: ${currentTheme.colors.primaryColor};
  `
  return <GridStyled {...props}>{props.children}</GridStyled>
}

export default GridContainerWithThemeMainColor
