import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar';
import About from './components/pages/About'
import TravelWebsites from './components/pages/TravelWebsites';
import Flights from './components/pages/Flights';

import './app.css'

function App() {
  const pathname = window.location.pathname;
  console.log(pathname)
  return (
    <div className='container'>
      <Router>
        <Sidebar />
        <Switch>
          <Route path = '/' exact component = {About} />
          <Route path = '/about' component = {About} />
          <Route path = '/flights' component = {Flights} />
          <Route path = '/websites' component = {TravelWebsites} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
