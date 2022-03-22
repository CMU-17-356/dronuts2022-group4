import React from 'react';
import { Tabs } from '@geist-ui/react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import User, { EmptyUser } from '../types/User';
import useLocalStorage from '../util/useLocalStorage';


//navigation ordering for the navbar
const NavBarScroller = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let currentUser: User = useLocalStorage('user', EmptyUser)[0];

  return (
    <Tabs value={location.pathname} onChange={(route) => navigate(route, { replace: true })}>
      <Tabs.Item label="Home" value = "/" /> 
      <Tabs.Item label="Store" value = "/store" /> 
      { currentUser.access_level === 'owner' && 
        <>
          <Tabs.Item label="Admin Store" value = "/adminstore" />
          <Tabs.Item label="Store Order History" value = "/storeorderhistory" />
        </>
      }
      { currentUser.access_level === 'employee' && 
        <>
          <Tabs.Item label="Employee Notification System" value = "/empnotsys" />
          <Tabs.Item label="Drones" value = "/drones" />
        </>
      }
      { currentUser.access_level === 'customer' && 
        <>
          <Tabs.Item label="Order Status" value = "/orderstatus" />
        </>
      }
      
      
      
      
      
    </Tabs>
  );
};

export default NavBarScroller;