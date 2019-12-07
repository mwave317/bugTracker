import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const Settings = () => {
    const [image, setImage ] = useState('');
    const [loading, setLoading ] = useState(false);

    const uploadImage = e => {
        const files = e.target.files[0];
        const formData = new FormData();
              formData.append("upload_preset", "bugtracker1");
              formData.append("file", files);              
        setLoading(true);

         axios.post('https://api.cloudinary.com/v1_1/bugtracker/image/upload', formData )
        .then(response => setImage(response.data.secure_url))
        .then(response => console.log(response))
        .then(setLoading(false))
        .catch(err => console.log('This is from the file upload', err))
    }

    return (
        <div>
<input className="settings-image" type="file" name="file" placeholder="upload a new image" onChange={uploadImage}/>

{loading ? (<h3>Loading ....</h3>) : (<img className="image" src={image}/>)}

        </div>
    )
}

export default Settings;