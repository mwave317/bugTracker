import React, { useState } from 'react';
import {Route, useParams } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import  Home from './components/Home';

function App() {

  return (
    <div>
      <Route exact path="/" component={Login}/>
      <Route exact path="/dashboard"  component={Home} />
      {/* <Route exact path="/dashboard:id"  strict sensitive render={({match}) =>match && <Home match={match} />}/> */}
    </div>
  );
}

export default App;
