import React from 'react';
import {useSelector} from 'react-redux';

const Dashboard = () => {
    // const user = useSelector(state => state.currentUser.user);
    // console.log(user);
    return (
        <div>
            <h2>Dash Board</h2>
            <p>Table showing pull request to review, reviewers name and Builds.</p>
            <p>Table shwoing your pull requests,  reviewers, and builds</p>
            <p>Table showing your repositories, with a description, builds, and recently viewed.</p>
            {/* { user ? <p>User Id is: {user.user}</p> : ''} */}
        </div>
    )
}

export default Dashboard;