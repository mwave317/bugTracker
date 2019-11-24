import React, { useState } from 'react';
import axios from 'axios';


const Type = () => {

    const [type, setType] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/type',{
            type,
        }).then((res) => console.log(res.data))
        .catch(err => console.log('Are you seeing this', err));
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Type</label>
                <input className="modalInput" type="text" name="type" onChange={ev => setType(ev.target.value)} required></input>
                <button type="submit" className="button">Submit</button>
            </form>
        </div>
    )

}

export default Type;