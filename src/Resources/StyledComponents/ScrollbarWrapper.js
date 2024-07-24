import { styled } from '@mui/material';
import Box from '@mui/material/Grid';

const ScrollbarWrapper = styled(Box)`
    height: 100vh;
    overflow-Y: scroll;
    &::-webkit-scrollbar {
        width: 8px;
    };
    &::-webkit-scrollbar-thumb {
        background: linear-gradient(90deg,red, white, blue);
    }
`;

export default ScrollbarWrapper;
