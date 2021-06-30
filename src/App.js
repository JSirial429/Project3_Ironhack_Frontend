import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Home from './pages';
import SigninPage from './pages/userAuth';
import Dashboard from './components/Dashboard/index'

function App() {

  const [user, setUser] = useState(false);

  const userState= (user)=>{
    if(user){

      setUser(true);
      console.log(this.user);
    }
  }
  
  return (
  /*   <>
      <Home/>
    </> */
    <Router>
     <Switch>
        <Route path='/' component={Home} exact />
        {/* <Route path='/signin' component={SigninPage} exact /> */}
        <Route path='/dashboard' component={Dashboard} exact /> 
        <Route path='/signin' exact render={(...props) => <SigninPage {...props} userState={this.setUser} />} />
        
        {/* <Route path='/search' component={SearchPage} exact /> */}
      </Switch>
   </Router>
  );
}

export default App;
