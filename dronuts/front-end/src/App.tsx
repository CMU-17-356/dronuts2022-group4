import React from 'react';
import logo from './logo.svg';
// import './App.css';
import DonutAvailability from './components/DonutAvailability'
import OrderStatus from './components/OrderStatus'
import NavbarScroller from './components/NavbarScroller';


//navigation ordering for the navbar
const navigation = {
  brand: { name: 'NavScroller', to: '/' },
  links: [
    { name: 'Donut Item Availability', to: './components/DonutAvailabilityItem' },
    { name: 'Donut Availability', to: './components/DonutAvailability' },
    { name: 'OrderStatus', to: './components/OrderStatus' },
    { name: 'Loading Instructions', to: './components/LoadingDroneInstructions' }
  ]
};

function App() {

  //containing the brand and link for each navigation on the navbar
  const { brand, links } = navigation;
  return (
    <div className="App">
      <NavbarScroller brand={brand} links={links} />
      <header className="App-header">
        <OrderStatus/>
      </header>
    </div>
  );
}

export default App;
