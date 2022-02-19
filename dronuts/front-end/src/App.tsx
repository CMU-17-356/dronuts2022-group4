import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Grid, Image, Text } from '@geist-ui/react';
import HomeApp from './components/HomePage';

//navigation ordering for the navbar
const navigation = {
  brand: { name: 'Home', to: '/' },
  links: [
    { name: 'Store', to: '/store' },
    { name: 'Admin Store', to: '/adminstore' },
    { name: 'Drones', to: '/drones' },
    { name: 'Loading Instructions', to: '/loadinstructions' },
    { name: 'Order Status', to: '/orderstatus' },
    { name: 'Store Order History', to: '/storeorderhistory' },
    { name: 'Employee Notification System', to: '/empnotsys' }
  ]
};

function App() {
  //containing the brand and link for each navigation on the navbar
  const { brand, links } = navigation;
  return (
    <div className="App">
      <header className="App-header">
        <HomeApp />
      </header>
    </div>
  );
}

export default App;
