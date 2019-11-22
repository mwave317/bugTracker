import React from 'react';
import Nav from './Nav';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Projects from './Projects';
import Repositories from './Repositories';
import YourWork from './YourWork';
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
                            <Route path="/yourwork"><YourWork /></Route>
                            <Route path="/repositories"><Repositories /></Route>
                            <Route path="/projects"><Projects /></Route>
                            <Route path="/username">Load component Pull Requests</Route>
                            <Route path="/issues"><Issues /></Route>
                            <Route path="/username">Load component Snippets</Route>
                        </Switch>
                    </div>
                    </div>
                </Router>
            </BrowserRouter>
        </div>
    )
}

export default Home;