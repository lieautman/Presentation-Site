import React, { useState } from 'react';
import NavigationContainer from './Navigation/NavigationContainer';
import Pages from './Pages';
import { PageContext } from './Navigation/State/PageContext';

function App() {
    const [pageNo, setPageNo] = useState(1);
    return (
        <PageContext.Provider value={{ pageNo, setPageNo }}>
            <NavigationContainer />
            <Pages pageNo={pageNo}/>
        </PageContext.Provider>
    )
}

export default App;