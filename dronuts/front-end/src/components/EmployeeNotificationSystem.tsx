import React, { useEffect, useState } from 'react';
import NavBarScroller from './NavbarScroller';
import { Page, Text, Spacer } from '@geist-ui/react';
import EmployeeNotificationSystemOrder from './EmployeeNotificationSystemOrder';
import type { Order } from './EmployeeNotificationSystemOrder';
import User from '../types/User';
import Donut from '../types/Donut';

function EmployeeNotificationSystem() {
  const [orderList, setOrderList] = useState<Array<Order>>([]);
  const [donutList, setDonutList] = useState<Array<Donut>>([]);
  const [userList, setUserList] = useState<Array<User>>([]);

  async function fetchUsers() {
    try {
      const response = await fetch('/users').then((res) => (res.json()));
      // console.log(response);
      setUserList(response);
    } catch (e) {
      console.error(e);
    }
  }

  async function fetchDonuts() {
    try {
      const response = await fetch('/donuts').then((res) => (res.json()));
      // console.log(response);
      setDonutList(response);
    } catch (e) {
      console.error(e);
    }
  }

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
    fetchDonuts();
    fetchUsers();
    fetchOrders();
  }, []);

  return (
    <div className='EmpNotSystem'>
      <NavBarScroller />
      <Text h1 style={{textAlign:'center', marginBottom:'-1em'}}>Pending Orders</Text>
      <Page>
        {orderList
          ? orderList.filter(order => order.status === "Submitted").map((order) => {
              return (
                <div>
                    <EmployeeNotificationSystemOrder order={order} donutList={donutList} userList={userList}/>
                </div>
              );
            })
          : null}
      </Page>
      <Spacer h={3} />
      <Text h1 style={{textAlign:'center', marginBottom:'-1em'}}>Completed Orders</Text>
      <Page>
        {orderList
          ? orderList.filter(order => order.status === "Completed").map((order) => {
              return (
                <div>
                    <EmployeeNotificationSystemOrder order={order} donutList={donutList} userList={userList}/>
                </div>
              );
            })
          : null}
      </Page>
    </div>
  );
}

export default EmployeeNotificationSystem;
