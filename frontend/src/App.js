import React from 'react';
import './App.css';
import Index from './components/Index.js';
import Userpage from './components/Userpage';
import Pokedex from './components/Pokedex';


function App() {
  return (
    <div className="grid-container"> 
    <div className="header">
      <h1 className="hellopokemons"><span className="first">"HELLO,</span><span className="second"> POKEMONS"</span></h1>
    </div>
    <Index />
    </div>
  );
}

export default App;
