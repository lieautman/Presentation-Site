import { useContext } from "react";
import NavigationComponent from './NavigationComponent';
import { PageContext } from './State/PageContext';
import useMediaQuery from '@mui/material/useMediaQuery';

function NavigationContainer() {
    const { setPageNo } = useContext(PageContext);
    const matches = useMediaQuery('(min-width:600px)');


    return matches ? (<NavigationComponent setPageNo={setPageNo} />) : (<></>)

}

export default NavigationContainer;