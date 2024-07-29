import MenuClosedComponent from "./MenuClosedComponent";
import MenuOpenComponent from "./MenuOpenComponent";

function NavigationPhoneComponent({ setPageNo, menuOpen, setMenuOpen }) {
  return menuOpen ? (
    <MenuOpenComponent setPageNo={setPageNo} setMenuOpen={setMenuOpen} />
  ) : (
    <MenuClosedComponent setMenuOpen={setMenuOpen} />
  );
}

export default NavigationPhoneComponent;
