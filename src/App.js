import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Home from './pages';
import SigninPage from './pages/userAuth';
// import SearchPage from './components/'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        {/* <Route path='/search' component={SearchPage} exact /> */}
      </Switch>
    </Router>
  );
}

export default App;
