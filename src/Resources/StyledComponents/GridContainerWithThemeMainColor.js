import { styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import darkTheme from "../Theme/theme";

const GridContainerWithThemeMainColor = styled(Grid)`
    background-color: ${darkTheme.colors.primaryColor};
    height: 9vh;
`;

export default GridContainerWithThemeMainColor;