import { styled } from "@mui/material"
import Box from "@mui/material/Grid"

const ScrollbarWrapper = (props) => {
  const ScrollbarWrapperStyled = styled(Box)`
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scroll-behaviour: smooth;
    &::-webkit-scrollbar {
      width: ${props.display ? "8px" : "0px"};
    }
    &::-webkit-scrollbar-thumb {
      background: gray;
    }
  `
  return <ScrollbarWrapperStyled {...props}>{props.children}</ScrollbarWrapperStyled>
}

export default ScrollbarWrapper
