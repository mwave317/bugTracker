import React from 'react';
import Nav from './Nav';
import { BrowserRouter, Switch, Route, Router, useParams } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Dashboard from './Dashboard';
import Header from './Header';
import Issues from './Issues';
import Projects from './Projects';
import Settings from './Settings';
import PullRequests from './PullRequests';
import Repositories from './Repositories';

import '../App.css';

const Home = () => {
    const newHistory = createBrowserHistory();
    const {id} = useParams(12345);

    return (
        <div className="wrapper">
           <BrowserRouter>
           <Router history={newHistory}>
                    <div  className="aside">
                        <Nav/>
                    <div className="content">
                        <Header/>
                        <Switch>
                            <Route exact path ="/dashboard"><Dashboard/></Route>
                            <Route exact path="/repositories"><Repositories /></Route>
                            <Route exact path="/projects"><Projects /></Route>
                            <Route exact path="/pullrequests"><PullRequests/></Route>
                            <Route exact path="/issues"><Issues /></Route>
                            <Route exact path="/settings"><Settings /></Route>
                        </Switch>
                    </div>
                    </div>
                </Router>
            </BrowserRouter>
        </div>
    )
}

export default Home;