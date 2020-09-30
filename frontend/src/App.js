import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Userpage from './components/Userpage';


function App() {

  return (
    <div className="grid-container">
      <Header />
      <Main />
    </div>
  );

}

export default App;
