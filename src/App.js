import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar';
import About from './components/pages/About';
import TravelWebsites from './components/pages/TravelWebsites';
import Flights from './components/pages/Flights';
import styled from 'styled-components';
import Tweets from './components/pages/Tweets';

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
          <Route path = '/tweets' exact component = {Tweets} />
          <Route path = '/about' component = {About} />
          <Route path = '/flights' component = {Flights} />
          <Route path = '/websites' component = {TravelWebsites} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
