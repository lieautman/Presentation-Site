import Grid from '@mui/material/Grid';

function NavigationComponent() {

    return (
        <Grid container>
            <Grid item xs={4} display={'flex'} justifyContent={'center'}>ceva</Grid>
            <Grid item xs={2} display={'flex'} justifyContent={'center'}>ceva2</Grid>
            <Grid item xs={2} display={'flex'} justifyContent={'center'}>ceva3</Grid>
            <Grid item xs={2} display={'flex'} justifyContent={'center'}>ceva4</Grid>
            <Grid item xs={2} display={'flex'} justifyContent={'center'}>ceva5</Grid>
        </Grid>
    )
}

export default NavigationComponent;