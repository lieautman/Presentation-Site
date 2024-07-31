import Grid from "@mui/material/Grid"
import useMediaQuery from "@mui/material/useMediaQuery"

function DetailsCarousel({ pageNo }) {
  const matches = useMediaQuery("(min-width:1000px)")

  return (
    <Grid container sx={{ height: "50vh", width: "70vw" }}>
      {matches ? <Grid item sx={{ backgroundColor: "red" }} xs={6}></Grid> : <></>}
      <Grid item sx={{ backgroundColor: "yellow" }} xs={matches ? 6 : 12}>
        text
      </Grid>
    </Grid>
  )
}

export default DetailsCarousel
