import React, { useEffect, useState } from 'react';
// import './App.css';

// component imports
import { Page, Text, Card, Divider, Badge, Spacer, Grid, Checkbox, Image, Button } from '@geist-ui/react';
import drone_img from '../images/drone.png';
import EmployeeNotificationSystemOrder from './EmployeeNotificationSystemOrder';
import type { Order } from './EmployeeNotificationSystemOrder';

function EmployeeNotificationSystem() {
  const [orderList, setOrderList] = useState<Array<Order>>([]);

  // fetching the async/await way
  async function fetchOrders() {
    try {
      const response = await fetch('/orders').then((res) => (res.json()));
      console.log(response);
      setOrderList(response);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className='EmpNotSystem'>
      <Text h2 style={{marginLeft:'1em', marginBottom:'-1em'}}>Pending Orders</Text>
      <Page>
        {orderList
          ? orderList.filter(order => order.status == "pending").map((order) => {
              return (
                <div>
                    <EmployeeNotificationSystemOrder order={order} />
                    <Spacer h={3} />
                </div>
              );
            })
          : null}
      </Page>
      <Spacer h={3} />
      <Text h2 style={{marginLeft:'1em', marginBottom:'-1em'}}>Completed Orders</Text>
      <Page>
        {orderList
          ? orderList.filter(order => order.status == "completed").map((order) => {
              return (
                <div>
                    <EmployeeNotificationSystemOrder order={order} />
                    <Spacer h={3} />
                </div>
              );
            })
          : null}
      </Page>
    </div>
  );
}

export default EmployeeNotificationSystem;
