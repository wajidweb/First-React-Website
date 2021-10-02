import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import Blogs from './components/pages/Blogs/Blogs';
import Services from './components/pages/Services/Services';
import SignUp from './components/pages/SignUp/SignUp';

function App() {
  return (
   
    <Router>
          <Navbar />
          
          <Switch >
            <Route path='/' exact component={Home}/>
          </Switch>
          <Switch>
            <Route path='/services' exact component={Services} />
          </Switch>
          <Switch>
            <Route path='/blogs' exact component={Blogs} />
          </Switch>
          <Switch>
            <Route path='/sign-up' exact component={SignUp} />
          </Switch>

          <Footer />
    </Router>
      
   
  );
}

export default App;
