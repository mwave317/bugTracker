import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Nav = () => {
    return (

        <div>
            <h2 className="nav-h2">Bug Tracker</h2>
            <ul>
                <li className="link"><Link to="/dashboard/">Dashboard</Link></li>
                <li className="link"><Link to="/dashboard/repositories">Repositories</Link></li>
                <li className="link"><Link to="/projects">Projects</Link></li>
                <li className="link"><Link to="/pullrequets">Pull Requests</Link></li>
                <li className="link"><Link to="Issues">Issues</Link></li>
                <li className="link"><Link to="snippets">Snippets</Link></li>
            </ul>
        </div>
    );
}

export default Nav;