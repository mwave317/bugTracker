import React from 'react';

const Dashboard = () => {
let date = new Date();
    // console.log(date.toDateString("en-US"));
    return (
        <div>
            <h2>Dash Board</h2>
            <p>Table showing pull request to review, reviewers name and Builds.</p>
            <p>Table shwoing your pull requests,  reviewers, and builds</p>
            <p>Table showing your repositories, with a description, builds, and recently viewed.</p>
        </div>
    )
}

export default Dashboard;