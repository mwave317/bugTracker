import React, { useState } from 'react';

import Header from  './Header';
import TicketModal from './TicketModal';
import Type from './Type';

const Issues = () => {
    const [toggle, setToggle] = useState(false);
    const [type, setType ] = useState(false);

    let modalToggle = () => {
        !toggle ? setToggle(true) : setToggle(false);
        if (type) setType(false)
    }

    let typeToggle = () => {
        !type ? setType(true) : setType(false);
        if (toggle) setToggle(false);
    }

    return (
        <div>
            <h2>Issues</h2>
            <Header/>
            <button className="toggle-button" id="centered-toggle-button" onClick={modalToggle}>Create New Task</button>
            <button className="toggle-button" id="centered-toggle-button" onClick={typeToggle}>Create New Type</button>
            <div>
                
                {toggle && !type ? <TicketModal /> : false}
                {type && !toggle ? <Type/> : false}
            </div>

        </div>
    )
}

export default Issues;