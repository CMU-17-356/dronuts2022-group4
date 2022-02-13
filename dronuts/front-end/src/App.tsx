import React from 'react';
import logo from './logo.svg';
// import './App.css';
import DonutAvailability from './components/DonutAvailability'
import OrderStatus from './components/OrderStatus'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DonutAvailability />
      </header>
    </div>
  );
}

export default App;
