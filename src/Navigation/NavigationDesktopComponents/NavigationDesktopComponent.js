import { useState } from "react"
import MenuClosedComponent from "./MenuClosedComponent"
import MenuOpenComponent from "./MenuOpenComponent"

function NavigationDesktopComponent({ setPageNo }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      {menuOpen ? <MenuOpenComponent setMenuOpen={setMenuOpen} /> : <></>}
      <MenuClosedComponent setPageNo={setPageNo} setMenuOpen={setMenuOpen} />
    </>
  )
}

export default NavigationDesktopComponent
