import React from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/page/Home';
import SignIn from './components/page/SignIn';
import UserProfile from './components/page/UserProfile.jsx';

import Footer from './components/Footer/Footer';

//Element page home and router contained

export default function App(){
   return ( 
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/sign-in" component={ SignIn }/>
            <Route path="/user-profile" component={ UserProfile }/>
          </Switch>            
        <Footer/>
      </Router>   
    );
}