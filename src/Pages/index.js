import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import CV from "./CV"
import Error from "./Error"

function Pages(props) {
    switch (props.pageNo) {
        case 1:
            return <Home />
        case 2:
            return <About />
        case 3:
            return <Contact />
        case 4:
            return <CV />
        default:
            return <Error />
    }
}

export default Pages;