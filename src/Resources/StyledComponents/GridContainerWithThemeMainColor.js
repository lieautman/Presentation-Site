import { styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import theme from "../Theme/theme";

const GridContainerWithThemeMainColor = styled(Grid)`
    background-color: ${theme.colors.primaryColor}
`;

export default GridContainerWithThemeMainColor;