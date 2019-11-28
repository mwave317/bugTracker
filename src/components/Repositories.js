import React from 'react';
import  ProfileIcon from './ProfileIcon'
import SelectBox from '../components/SelectBox';

const Repositories = () => {
    return (
        <div>
          <ProfileIcon/>
          <SelectBox items={[{value: 'Settings', id: 1},{ value: 'LogOut', id: 2}]}/>
        </div>
    )
}

export default Repositories;