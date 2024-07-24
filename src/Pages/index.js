import Home from "./Home/Home"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Resume from "./Resume/Resume"
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
            return <Resume />
        default:
            return <Error />
    }
}

export default Pages;