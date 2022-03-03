import React from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/page/Home';
import SignIn from './components/page/login';
import UserProfile from './components/page/profile.jsx';

import Footer from './components/Footer/Footer';
import Error from './components/page/Error';

//Element page home and router contained

export default function App(){
   return ( 
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/login" component={ SignIn }/>
            <Route path="/profile" component={ UserProfile }/>
            <Route path="*" component={ Error }/>
          </Switch>            
        <Footer/>
      </Router>   
    );
}