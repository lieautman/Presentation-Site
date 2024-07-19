import { Typography } from '@mui/material';
import theme from "../Theme/theme";
import { styled } from '@mui/material';

const TypographyWithTheme = styled(Typography)`
    color: ${theme.colors.textColor}
`;

export default TypographyWithTheme;
