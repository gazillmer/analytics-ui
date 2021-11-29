import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar';
import About from './components/pages/About';
import TravelWebsites from './components/pages/TravelWebsites';
import Flights from './components/pages/Flights';
//import POA from './components/pages/POA';
import styled from 'styled-components';

// Style App structure
const Container = styled.div`
  display: flex;
  background-color: #fafafa;
`

function App() { 
  return (
    <Container>
      <Router>
        <Sidebar />
        <Switch>
          <Route path = '/' exact component = {About} />
          <Route path = '/about' component = {About} />
          <Route path = '/flights' component = {Flights} />
          {//<Route path = '/POA' component = {POA} />
          }
          <Route path = '/websites' component = {TravelWebsites} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
