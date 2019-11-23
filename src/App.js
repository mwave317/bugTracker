import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import  Home from './components/Home';

function App() {
  return (
    <div>
      <Route exact path="/" component={Login}/>
      <Route exact path="/dashboard" component={Home}/>
    </div>
  );
}

export default App;
