import React, { useState } from 'react';
import axios from 'axios';
import Register from './Register';


const Login = () => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    const formSubmit = event => {
        event.preventDefault();

        const userData = {
            username,
            password,
        }
        //send to api to check if correct by passing the userData.
        setUser(userData);
        axios.post('http://localhost:5000/signin/', {
            username: userData.username,
            password: userData.password,
            
        }).then((res) => console.log('This is the res from the handlesubmit', res))
        .catch(err => console.log('Are you seeing this', err));

        setUsername(''); // Added just to clear the inputs for username  and password before redirect.
        setPassword('');
    }

    return (
        <div>
            <div className="section login-section">
                <h2>Bug Tracker</h2>
                <div className="container login-container">
                    <div>
                        <form onSubmit={formSubmit}>
                            <input className="input" onChange={ev => setUsername(ev.target.value)} type='text' autoComplete='username' placeholder='username' value={username} />
                            <input className="input" onChange={ev => setPassword(ev.target.value)} type='password' autoComplete='current-password' placeholder='password' value={password} />
                            <button className="inline button" type="submit">Continue</button>
                        </form>


                        {/* <p>{user && JSON.stringify(user, null, 2)}</p> */}
                    </div>

                </div>
            </div>
            <div className="legal"><p className="legal-text inline">Privacy Policy</p><p className="legal-text inline"> Terms of service</p></div>
        </div>
    )

}

export default Login;