import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Resume from "./Resume"
import { Routes, Route, HashRouter } from "react-router-dom"

function Pages() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/resume" element={<Resume />} />
      </Routes>
    </HashRouter>
  )
}

export default Pages
