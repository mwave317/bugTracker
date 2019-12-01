import React, { useState } from 'react';
import Calendar from './Calendar';

const Sprint = () => {

    let getSprint = () => {

    }

    return (
        <div>
            <input type="text" name="sprint" onChange={ ev => getSprint(ev.target.value)}></input>
            <input type="text" name="date" onChange={ ev => getSprint(ev.target.value)}></input>
            <Calendar/>
            <button type ="submit">Submit</button>
        </div>
    )

}

export default Sprint;