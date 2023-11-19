import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'


import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (

    // BEM
    <div className="app">
      <Router>
        <Header />
        
        <Home />
        
      
      </ Router>
    </div>
  );
}

export default App;
