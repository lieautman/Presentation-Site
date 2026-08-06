import Home from "./1.Home"
import About from "./2.About"
import Contact from "./3.Contact"
import Resume from "./4.Resume"
import NoPageFound from "./NoPageFound"
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
        <Route path="/*" element={<NoPageFound />} />
      </Routes>
    </HashRouter>
  )
}

export default Pages
