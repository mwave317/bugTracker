import React, { useState } from 'react';
import TicketModal from './TicketModal';

const Issues = () => {
    const [toggle, setToggle] = useState(false);

    let modalToggle = () => {
        !toggle ? setToggle(true) : setToggle(false);
    }


    return (
        <div>
            <button className="toggle-button" id="centered-toggle-button" onClick={modalToggle}>Create New Task</button>
            <div>
                {toggle ? <TicketModal /> : false}
            </div>

        </div>
    )
}

export default Issues;