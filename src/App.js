import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Home from './pages';
import SigninPage from './pages/userAuth';
import Dashboard from './pages/dashboard'

function App() {
  return (
  /*   <>
      <Home/>
    </> */
    <Router>
     <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/dashboard' component={Dashboard} exact /> 
      </Switch>
   </Router>
  );
}

export default App;
