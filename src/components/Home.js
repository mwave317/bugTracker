import React from 'react';
import Nav from './Nav';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Projects from './Projects';
import Repositories from './Repositories';
import Dashboard from './Dashboard';
import Issues from './Issues';
import '../App.css';

const Home = () => {
    const newHistory = createBrowserHistory();
    return (
        <div className="wrapper">
           <BrowserRouter>
                <Router history={newHistory}>
                    <div  className="aside">
                        <Nav/>
                    <div className="content">
                        <Switch>
                            <Route exact path ="/dashboard"><Dashboard/></Route>
                            <Route exact path="/repositories"><Repositories /></Route>
                            <Route exact path="/projects"><Projects /></Route>
                            <Route exact path="/username">Load component Pull Requests</Route>
                            <Route exact path="/issues"><Issues /></Route>
                            <Route exact path="/username">Load component Snippets</Route>
                        </Switch>
                    </div>
                    </div>
                </Router>
            </BrowserRouter>
        </div>
    )
}

export default Home;