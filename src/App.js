import React from 'react'
import { BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom'

import Sidebar from './components/Sidebar';
import About from './components/pages/About'
import FeaturedInfo from './components/featuredInfo/FeaturedInfo';
import BarChart from './components/charts/BarChart';

import './app.css'

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
}

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
          <Route path = '/flights' component = {BarChart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
