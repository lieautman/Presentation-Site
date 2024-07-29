import { styled } from "@mui/material"
import Box from "@mui/material/Box"

const BoxWithvh = (props) => {
  const BoxStyled = styled(Box)`
    height: ${props.height}vh;
  `
  return <BoxStyled {...props}>{props.children}</BoxStyled>
}

export default BoxWithvh
