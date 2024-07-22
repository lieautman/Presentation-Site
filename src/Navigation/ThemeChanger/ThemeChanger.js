import { useContext } from "react";
import { ThemeContext } from "../../Resources/Theme/ThemeContext"
import { darkTheme, lightTheme } from "../../Resources/Theme/Theme"

const ThemeChanger = () => {
    const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
    return <img src={currentTheme.images.navBarImage} alt="Logo" style={{ cursor: "pointer", width: "auto", height: "8vh" }}
        onClick={()=>currentTheme===darkTheme?setCurrentTheme(lightTheme):setCurrentTheme(darkTheme)} />
}

export default ThemeChanger;