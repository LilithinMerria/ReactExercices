import React, { useState } from 'react';
import FetchData from './FetchData';
import MoveMouse from './HookMousePosition';

const ContainMouse = () => {
    const [display, setDisplay] = useState(true);
    const [displayFetch, setdisplayFetch] = useState(false);
    return(
        <div>
            <button onClick={() => setDisplay(!display)}>Display Move</button>
            <button onClick={() => setdisplayFetch(!displayFetch)}>Display Fetched Data</button>
            {!display && <MoveMouse />}
            {displayFetch && <FetchData />}
        </div>
        
        
    )
}

export default ContainMouse;