import React, { useEffect, useState } from 'react';
import NavBarScroller from './NavbarScroller';
import { Page, Text, Spacer } from '@geist-ui/react';
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
      <NavBarScroller />
      <Text h1 style={{textAlign:'center', marginBottom:'-1em'}}>Pending Orders</Text>
      <Page>
        {orderList
          ? orderList.filter(order => order.status === "pending").map((order) => {
              return (
                <div>
                    <EmployeeNotificationSystemOrder order={order} />
                </div>
              );
            })
          : null}
      </Page>
      <Spacer h={3} />
      <Text h1 style={{textAlign:'center', marginBottom:'-1em'}}>Completed Orders</Text>
      <Page>
        {orderList
          ? orderList.filter(order => order.status === "completed").map((order) => {
              return (
                <div>
                    <EmployeeNotificationSystemOrder order={order} />
                </div>
              );
            })
          : null}
      </Page>
    </div>
  );
}

export default EmployeeNotificationSystem;
