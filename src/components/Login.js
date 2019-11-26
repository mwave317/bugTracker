import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from '../components/Home';
import {useSelector } from 'react-redux';
import { connect } from  'react-redux';
import { Redirect } from  'react-router-dom';


const Login = () => {

    const isLogged = useSelector(state => state.authReducer);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [results, setResults] = useState();

    const formSubmit = event => {
        event.preventDefault();

        //send to api to check if correct by passing the userData.
        axios.post('http://localhost:5000/signin/', {
            username,
            password,
            
        }).then((res) => console.log(res.data))
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
                    </div>
       
                </div>
            </div>
            <div className="legal"><p className="legal-text inline">Privacy Policy</p><p className="legal-text inline"> Terms of service</p></div>
        </div>
    )
}

// Exmaple below:
// /* function mapStateToProps({ auth, recent }) {
//     return { auth, recent };
//   }
  
  /*export default connect(mapStateToProps, actions)(AddComment); */

export default Login;