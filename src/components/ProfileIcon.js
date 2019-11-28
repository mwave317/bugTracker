import React, {useState} from 'react';
import avatar  from '../images/me.jpg';

import SelectBox from './SelectBox';
const ProfileIcon = (props) => {

    const [ useDropDown, setDropDown] = useState(false);

    //add axios call to retreive the image

    return (
        <div className="profile">
            <img className="profile-icon box-shadow" src={avatar} onClick={e => setDropDown(!useDropDown)} alt="profile picture"/>
            { useDropDown ? <div><SelectBox items={[{value: 'Settings', id: 1},{ value: 'LogOut', id: 2}]}/></div>: ''}
        </div>
    )

}

export default ProfileIcon;