import { styled } from "@mui/material"
import Grid from "@mui/material/Grid"
import { useContext } from "react"
import { themeContext } from "../../contexts/themeContext"

const GridContainerWithThemeMainColor = (props) => {
  const { currentTheme } = useContext(themeContext)

  const GridStyled = styled(Grid)`
    background-color: ${currentTheme.colors.primaryColor};
  `
  return <GridStyled {...props}>{props.children}</GridStyled>
}

export default GridContainerWithThemeMainColor
