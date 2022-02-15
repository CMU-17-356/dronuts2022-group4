import React from 'react';
import logo from './logo.svg';
// import './App.css';
import DonutAvailability from './components/DonutAvailability'
import OrderStatus from './components/OrderStatus'
import type { Donut } from './components/DonutStoreItem'
import DonutStore from './components/DonutStore'
import DonutStoreCheckout from './components/DonutStoreCheckout'

function App() {
  let donuts: Array<[Donut, number]> = [
    [{id: 0, name: "Test Vanilla", img_url: "", available: true}, 1]
  ];
  return (
    <div className="App">
      <header className="App-header">
        <DonutStore />
        <DonutStoreCheckout donuts={donuts} />
      </header>
    </div>
  );
}

export default App;
