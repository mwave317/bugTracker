import React, { useState } from 'react';
import  '../css/selectBox.css';
import '../App.css';
import { Link } from 'react-router-dom';

const SelectBox = (props) => {

    const [ useItems, setItems ] = useState(props.items || []);
    const [ useSelectedItem, setSelectedItem ] = useState('');


console.log(useSelectedItem);
    return (
            <div className="selectBox box-shadow">
            { props.items.map((item, index) => <div key={index} className="selectBox-item" onClick={e => setSelectedItem(item)}> <Link to={item.value.toLowerCase()}>{item.value}</Link></div>)}
        </div>
        
    )

}

export default SelectBox;