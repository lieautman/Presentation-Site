import GridContainerWithThemeMainColor from "../Resources/StyledComponents/GridContainerWithThemeMainColor";
import GridItemAligned from "../Resources/StyledComponents/GridItemAligned";
import logo from "../Resources/Images/logo.png"

function NavigationComponent() {

    return (
        <GridContainerWithThemeMainColor container>
            <GridItemAligned item xs={4} ><img src={logo} alt="Logo" style={{width: "auto", height: "8vh"}} /></GridItemAligned>
            <GridItemAligned item xs={2}><h1>Acasa</h1></GridItemAligned>
            <GridItemAligned item xs={2}><h1>Despre</h1></GridItemAligned>
            <GridItemAligned item xs={2}><h1>Contact</h1></GridItemAligned>
            <GridItemAligned item xs={2}><h1>CV</h1></GridItemAligned>
        </GridContainerWithThemeMainColor>
    )
}

export default NavigationComponent;