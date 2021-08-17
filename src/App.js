import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar';
import About from './components/pages/About'
import FeaturedInfo from './components/featuredInfo/FeaturedInfo';

import './app.css'

function App() {
  return (
    <div className='container'>
      <Router>
        <Sidebar />
        <Switch>
          <Route path = '/' exact component = {About} />
          <Route path = '/flights' exact component = {FeaturedInfo} />
          <Route path = '/' exact component = {About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
