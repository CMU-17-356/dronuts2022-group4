import { Card, Grid, Text, Page } from '@geist-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';
import Donut from '../types/Donut';
import User from '../types/User';
import NavBarScroller from './NavbarScroller';

export interface Order {
  id: number,
  customer: number,
  address: string,
  status: string
  purchase_date: Date,
  items: [[Number, Number]],
}

function PurchasesList() {
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

  function getFormattedDate (order : Order) {
    let date = order.purchase_date.toString();
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);
    let year = date.substring(0, 4);
    return month + "-" + day + "-" + year;
  }

  function getCustomerName (order: Order) {
    let customer : User = userList.filter(u => u.id === order.customer)[0];
    let fname = "";
    let lname = "";
    if (customer === undefined) {
        fname = "Guest";
        lname = "User";
    } else {
        fname = customer.first_name;
        lname = customer.last_name;
    }
    
    return fname + " " + lname;
  }

  function getPrice(order : Order) {
    let donut_ids = order.items;
    let price = 0.0;
    for (const item of donut_ids) {
      let donut_id = item[0];
      let quant = item[1].valueOf();
      let donut_price = donutList.filter(d => d.id === donut_id)[0].price;
      price += (donut_price * quant);
    }
    return price;
  }

  return (
    <div className = "DonutApp" >
    <NavBarScroller />

    <Grid.Container gap={2}>
      <Grid xs={24}>
        <Text h2>Purchases</Text>
      </Grid>
      <Grid xs={24} justify="center">
        {orderList
            ? orderList.filter(order => order.status === "Completed").map((order) => {
                return (
                  <Card shadow width="90%">
                    <Grid.Container gap={2}>
                      <Grid xs={6}>
                        <Text>{getCustomerName(order)}</Text>
                      </Grid>
                      <Grid xs={6}>
                        <Text>{order.address}</Text>
                      </Grid>
                      <Grid xs={6}>
                        <Text>${getPrice(order)}</Text>
                      </Grid>
                      <Grid xs={6}>
                        <Text>{getFormattedDate(order)}</Text>
                      </Grid>
                    </Grid.Container>
                  </Card>
                );
              })
            : null}
      </Grid>
      {/* <Grid xs={24} justify="center">
        <Card shadow width="90%">
          <Grid.Container gap={2}>
            <Grid xs={6}>
              <Text>Aashai A.</Text>
            </Grid>
            <Grid xs={6}>
              <Text>5000 Forbes Ave</Text>
            </Grid>
            <Grid xs={6}>
              <Text>$20.00</Text>
            </Grid>
            <Grid xs={6}>
              <Text>December 26, 2021</Text>
            </Grid>
          </Grid.Container>
        </Card>
      </Grid>
      <Grid xs={24} justify="center">
        <Card shadow width="90%">
          <Grid.Container gap={2}>
            <Grid xs={6}>
              <Text>Max D.</Text>
            </Grid>
            <Grid xs={6}>
              <Text>5000 Forbes Ave</Text>
            </Grid>
            <Grid xs={6}>
              <Text>$10.50</Text>
            </Grid>
            <Grid xs={6}>
              <Text>December 6, 2021</Text>
            </Grid>
          </Grid.Container>
        </Card>
      </Grid>
      <Grid xs={24} justify="center">
        <Card shadow width="90%">
          <Grid.Container gap={2}>
            <Grid xs={6}>
              <Text>John N.</Text>
            </Grid>
            <Grid xs={6}>
              <Text>5000 Forbes Ave</Text>
            </Grid>
            <Grid xs={6}>
              <Text>$15.00</Text>
            </Grid>
            <Grid xs={6}>
              <Text>October 30, 2021</Text>
            </Grid>
          </Grid.Container>
        </Card>
      </Grid> */}
    </Grid.Container>
    </div>

  );
}

export default PurchasesList