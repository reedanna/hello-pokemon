import React from 'react';
import './App.css';
import Index from './components/Index.js';
import Header from './components/Header.js';
import Userpage from './components/Userpage';
import Pokedex from './components/Pokedex';


function App() {
  return (
    <div className="grid-container"> 
    <Header />
    <Index />
    </div>
  );
}

export default App;
