import React from 'react';
import { Tabs } from '@geist-ui/react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


//navigation ordering for the navbar
const NavBarScroller = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Tabs value={location.pathname} onChange={(route) => navigate(route, { replace: true })}>
      <Tabs.Item label="Home" value = "/" /> 
      <Tabs.Item label="Store" value = "/store" /> 
      <Tabs.Item label="Admin Store" value = "/adminstore" />
      <Tabs.Item label="Order Status" value = "/orderstatus" />
      <Tabs.Item label="Store Order History" value = "/storeorderhistory" />
      <Tabs.Item label="Employee Notification System" value = "/empnotsys" />
      <Tabs.Item label="Drones" value = "/drones" />
    </Tabs>
  );
};

export default NavBarScroller;