import React from 'react';
import { useNavigate } from 'react-router-dom';
// component imports
import { Image, Button, Spacer } from '@geist-ui/react';
import dronutLogoImg from '../images/dronut.png';
import './HomePageStyle.css'


function HomeApp() {

  const navigate = useNavigate();

  function navigateStore() {
      navigate('/store');
  }

  function navigateLoginPage() {
    navigate('/login');
  }

  return ( 
    <div className='HomeApp'>
        <Button auto scale={1.5} type="success" style={{ textTransform: 'uppercase', fontWeight: 'bold', position: 'absolute', top: 10, right: 10 }} onClick={navigateLoginPage}>Log In</Button>
        <a href='/store' onClick={navigateStore}><Image width="100%" src={dronutLogoImg} /></a>
        <Spacer h={3} />
        {/* <Button auto scale={1.5} type="success" style={{ textTransform: 'uppercase', fontWeight: 'bold'}} onClick={navigateStore}>View Donuts</Button> */}
    </div>
  );
}

export default HomeApp;
