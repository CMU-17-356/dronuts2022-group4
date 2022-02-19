import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import './App.css';

// component imports
import { Grid, Text, Image, Button, Spacer } from '@geist-ui/react';
import DonutAvailabilityItem from './DonutAvailabilityItem';
import type { Donut } from './DonutAvailabilityItem';
import dronutLogoImg from '../images/dronut.png';
//import DisplayToggle from './components/DisplayToggle';


function HomeApp() {

  const navigate = useNavigate();

  function navigateStore() {
      navigate('/store');
  }

  return ( 
    <div className='HomeApp'>
        <Image width="100%" src={dronutLogoImg} />
        <Spacer h={3} />
        <Button auto scale={1.5} type="success" style={{ textTransform: 'uppercase', fontWeight: 'bold'}} onClick={navigateStore}>View Donuts</Button>
    </div>
  );
}

export default HomeApp;
