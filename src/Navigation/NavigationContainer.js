import { useContext } from "react";
import NavigationComponent from './NavigationComponent';
import { PageContext } from './State/PageContext';

function NavigationContainer() {
    const { setPageNo } = useContext(PageContext);
    return (
        <NavigationComponent setPageNo={setPageNo} />
    )
}

export default NavigationContainer;