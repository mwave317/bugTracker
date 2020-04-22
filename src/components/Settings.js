import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const Settings = () => {
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const uploadImage = e => {
        const files = e.target.files[0];
        const formData = new FormData();
        formData.append("upload_preset", "bugtracker1");
        formData.append("file", files);
        setLoading(true);

        axios.post('https://api.cloudinary.com/v1_1/bugtracker/image/upload', formData)
            .then(res => setImage(res.data.secure_url))
            .then(setLoading(false))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <label>
                Avatar: 
            </label>
            <input type="file" name="file" onChange={uploadImage} />

            {loading ? <h1>Loading...</h1> : <img className="settings-image" src={image} />}
        </div>
    )
}

export default Settings;