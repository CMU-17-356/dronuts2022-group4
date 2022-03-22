import React from 'react';
import { useNavigate } from 'react-router-dom';
// component imports
import { Image, Button, Spacer } from '@geist-ui/react';
import dronutLogoImg from '../images/dronut.png';
import './HomePageStyle.css'
import { EmptyUser } from '../types/User';
import useLocalStorage from '../util/useLocalStorage';


function HomeApp() {

  const navigate = useNavigate();
  let [currentUser, setCurrentUser] = useLocalStorage('user', EmptyUser);

  function navigateStore() {
      navigate('/store');
  }

  function navigateLoginPage() {
    navigate('/login');
  }

  function logOut(){
    setCurrentUser(EmptyUser);
  }

  return ( 
    <div className='HomeApp'>
        {currentUser.id === -1 &&
          <Button auto scale={1.5} type="success" style={{ textTransform: 'uppercase', fontWeight: 'bold', position: 'absolute', top: 10, right: 10 }} onClick={navigateLoginPage}>Log In</Button>
        }
        {currentUser.id !== -1 &&
          <Button auto scale={1.5} type="success" style={{ textTransform: 'uppercase', fontWeight: 'bold', position: 'absolute', top: 10, right: 10 }} onClick={logOut}>Log Out</Button>
        }
        <a href='/store' onClick={navigateStore}><Image width="100%" src={dronutLogoImg} /></a>
        <Spacer h={3} />
        {/* <Button auto scale={1.5} type="success" style={{ textTransform: 'uppercase', fontWeight: 'bold'}} onClick={navigateStore}>View Donuts</Button> */}
    </div>
  );
}

export default HomeApp;
