import Sidebar from './components/Sidebar';
import './app.css'
import About from './components/pages/About'
import Info from './components/pages/Info'
import React from 'react'

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <About />
    </div>
  );
}

export default App;
