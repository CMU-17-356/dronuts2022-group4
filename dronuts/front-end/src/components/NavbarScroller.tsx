import React from 'react';
import { Tabs } from '@geist-ui/react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


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

const NavBarScroller = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Tabs value={location.pathname} onChange={(route) => navigate(route, { replace: true })}>
      <Tabs.Item label="Store" value = "/store" /> 
      <Tabs.Item label="Admin Store" value = "/adminstore" />
      <Tabs.Item label="Loading Instructions" value = "/loadinstructions" />
      <Tabs.Item label="Order Status" value = "/orderstatus" />
      <Tabs.Item label="Store Order History" value = "/storeorderhistory" />
      <Tabs.Item label="Employee Notification System" value = "/empnotsys" />
      <Tabs.Item label="Drones" value = "/drones" />
    </Tabs>
  );
};

export default NavBarScroller;