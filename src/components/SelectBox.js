import React, { useState } from 'react';
import  '../css/selectBox.css';
import '../App.css';

const SelectBox = (props) => {

    const [ useItems, setItems ] = useState(props.items || []);
    const [ useSelectedItem, setSelectedItem ] = useState('');


console.log(useSelectedItem);
    return (
            <div className="selectBox box-shadow">
            { props.items.map((item, index) => <div key={index} className={useItems === item ? "selectBox-item selecteed": 'selectBox-item'} onClick={e => setSelectedItem(item)}>{item.value}</div>)}
        </div>
        
    )

}

export default SelectBox;