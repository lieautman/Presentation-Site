import { Typography } from "@mui/material"
import { styled } from "@mui/material"

const TypographyWithTheme = (props) => {
  const TypographyStyled = styled(Typography)`
    color: ${props.color};
  `
  return <TypographyStyled>{props.children}</TypographyStyled>
}

export default TypographyWithTheme
