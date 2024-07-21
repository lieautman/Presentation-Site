import BoxWith91vh from "../../Resources/StyledComponents/BoxWith91vh";
import securityBackgorundFadedCracked from "../../Resources/Images/securityBackgorundFadedCracked.jpg"

function Home() {

    return (
        <>
            <BoxWith91vh sx={{
                backgroundImage: `url(${securityBackgorundFadedCracked})`,
                backgroundSize: "100% 130%"
            }}>
            </BoxWith91vh>
        </>
    )
}

export default Home;