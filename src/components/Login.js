import React, { useState } from 'react';
import axios from 'axios';
// import Home from '../components/Home';
import {Redirect } from 'react-router-dom';


const Login = (props) => {


    // const isLogged = useSelector(state => state.authReducer);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [results, setResults] = useState();
    // const [redirect,  setRedirect] = useState(false);

    const formSubmit = event => {
        event.preventDefault();

        //send to api to check if correct by passing the userData.
        axios.post('http://localhost:5000/signin/', {
            username,
            password,
            
        }).then((res) => { setUser({userId: res.data.userId, token: res.data.token}); localStorage.setItem('token', res.data.token)
    })
        .catch(err => console.log(err));

        setUsername(''); // Added just to clear the inputs for username  and password before redirect.
        setPassword('');

        
    }

    if(user) {
        return <Redirect to="/dashboard"/>
    }

    console.log(user);
    console.log(localStorage);
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
                    </div>
                </div>
            </div>
            <div className="legal"><p className="legal-text inline">Privacy Policy</p><p className="legal-text inline"> Terms of service</p></div>
        </div>
    )
}


export default Login;