import { styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import { darkTheme } from "../Theme/Theme";

const GridContainerWithThemeMainColor = styled(Grid)`
    background-color: ${darkTheme.colors.primaryColor};
    height: 9vh;
`;

export default GridContainerWithThemeMainColor;