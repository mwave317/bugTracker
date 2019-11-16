import React from 'react';
import { BrowserRouter, Link, Switch, Route, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import '../App.css';
import Projects from './Projects';
import Repositories from './Repositories';
import YourWork from './YourWork';
import Issues from './Issues';


const Nav = () => {

    const newHistory = createBrowserHistory();
    return (

        <div className="wrapper">
            <BrowserRouter>
                <Router history={newHistory}>
                    <nav className="aside">
                        <ul>
                            <li className="link"><Link to="/">Your Work</Link></li>
                            <li className="link"><Link to="/repositories">Repositories</Link></li>
                            <li className="link"><Link to="/projects">Projects</Link></li>
                            <li className="link"><Link to="/pullrequets">Pull Requests</Link></li>
                            <li className="link"><Link to="Issues">Issues</Link></li>
                            <li className="link"><Link to="snippets">Snippets</Link></li>
                        </ul>
                    </nav>
                    <div className="content">
                        <Switch>
                            <Route exact path="/"><YourWork /></Route>
                            <Route path="/repositories"><Repositories /></Route>
                            <Route path="/projects"><Projects /></Route>
                            <Route path="/username">Load component Pull Requests</Route>
                            <Route path="/issues"><Issues /></Route>
                            <Route path="/username">Load component Snippets</Route>
                        </Switch>
                    </div>
                </Router>
            </BrowserRouter>


        </div>
    );
}

export default Nav;