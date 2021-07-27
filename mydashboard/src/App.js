import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe'
import Playground from './components/pages/Playground';
import ContactMe from './components/pages/ContactMe';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutMe' component={AboutMe} />
          <Route path='/playground' component={Playground} />
          <Route path='/contact-me' component={ContactMe} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
