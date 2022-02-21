import React from 'react';
import './App.css';
import HomeApp from './components/HomePage';


function App() {
  //containing the brand and link for each navigation on the navbar
  return (
    <div className="App">
      <header className="App-header">
        <HomeApp />
      </header>
    </div>
  );
}

export default App;
