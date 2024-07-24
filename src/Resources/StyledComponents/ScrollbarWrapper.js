import { styled } from '@mui/material';
import Box from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';

const ScrollbarWrapper = (props) => {
    const { i18n } = useTranslation();

    const ScrollbarWrapperStyled = styled(Box)`
    height: 100vh;
    overflow-Y: scroll;
    scroll-snap-type: y mandatory;
    &::-webkit-scrollbar {
        width: 8px;
    };
    &::-webkit-scrollbar-thumb {
        background: linear-gradient(90deg,${i18n.language === "en" ? "red, white, blue" : "red, yellow, blue"});
    }
    `;
    return <ScrollbarWrapperStyled {...props} >{props.children}</ScrollbarWrapperStyled>
}



export default ScrollbarWrapper;