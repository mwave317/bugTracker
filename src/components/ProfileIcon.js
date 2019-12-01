import React, {useState} from 'react';
import avatar  from '../images/me.jpg';

import SelectBox from './SelectBox';
const ProfileIcon = (props) => {

    const [ useDropDown, setDropDown] = useState(false);

    //add axios call to retreive the image

    return (
        <div className="profile">
            <img className="profile-icon box-shadow" src={avatar} onClick={e => setDropDown(!useDropDown)} alt="profile picture"/>
            { useDropDown ? <div><SelectBox items={[{ value: 'Create Branch', id: 1},{value: 'Create Pull Request', id: 2},{ value: 'Edit Profile', id: 3},{ value: 'Settings', id: 4},{ value: 'LogOut', id: 5}]}/></div>: ''}
        </div>
    )

}

export default ProfileIcon;