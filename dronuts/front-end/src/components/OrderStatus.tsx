import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

// component imports
import { Grid, Text, Button } from '@geist-ui/react';
import google_maps_credentials_file from '../google_maps_api_credentials.json';
import NavBarScroller from './NavbarScroller';
import { useParams } from 'react-router-dom';
import Order from '../types/Order';
import Donut from '../types/Donut';


export interface Center {
    lat: number,
    lng: number,
}
export interface Location {
    center: Center,
    zoom: number
}

const default_center = {lat: 40.44, lng: -79.99};
const default_loc = {center: default_center, zoom: 11};

// bring line down
// Progress bar sections
// pictures next to location, dropoff indicator by for drone, donut images
// 1) Through the navigate function is there a way to pass order? 
// 2) What is end-to-end testing in terms of code
// 3) Help with deployment

function OrderStatus() {
  let params = useParams();
  const [donutList, setDonutList] = useState<Array<Donut>>([]);
  const [orderList, setOrderList] = useState<Array<Order>>([]);
  const [order, setOrder] = useState<Order>();
  const [orderID, setOrderID] = useState<Number>(-1);

  function getApiCredentials() {
    const key = google_maps_credentials_file.api_key;
    //console.log(key);
    return key;
  }

  async function fetchOrders() {
    try {
      const response = await fetch('/orders').then((res) => (res.json()));
      console.log(response);
      return response;
    } catch (e) {
      console.error(e);
    }
  }

  async function fetchDonuts() {
    try {
      const response = await fetch('/donuts').then((res) => (res.json()));
      console.log(response);
      return response;
    } catch (e) {
      console.error(e);
    }
  }

  async function getOrder(id: Number, orderList: Array<Order>){
    console.log("getting order with id", id);
    let order = orderList.find(o => o.id === id);
    if(order !== undefined) {
      console.log("order: ", order);
      return order;
    }
  }

  useEffect(() => {
    const setup = async () => {
      let orderList = await fetchOrders();
      let donuts = await fetchDonuts();
      let order = await getOrder(Number(params.id), orderList);
      setOrderID(Number(params.id));
      setOrderList(orderList);
      setDonutList(donuts);
      setOrder(order);
    };
    setup();
  }, []);

  const location = useState<Location>(default_loc)[0];
  const api_key = useState(getApiCredentials())[0];

  function getOrderLocation(){
    if (order !== undefined){
      return order.address + ', Pittsburgh, PA 15217';
    } 
    return '5000 Beeler St, Pittsburgh, PA 15217';
  }

  function getDonutDetails(item : number[]) {
    let item_id = item[0];
    let item_quant = item[1];
    let donut = donutList.find(d => d.id === item_id);
    if(donut !== undefined) {
      return donut.name + " x " + item_quant;
    }
    return 'No donut';
  }

  return (
    <div className='DonutApp'>
      <NavBarScroller />
      <Grid.Container gap={2}>
        <Grid xs={12} >
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: `${api_key}` }}
                defaultCenter={location.center}
                defaultZoom={location.zoom}
                >
                </GoogleMapReact>
            </div>
        </Grid>
        <Grid.Container gap={4} xs={12} direction='column'>
            <Grid height="2.5vh"></Grid>
            <Grid height="2.5vh"><Text h1 style={{color:"#EF72AC"}}>7:30 PM <span style={{color:'#999'}}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Estimated Arrival Time</span></Text></Grid>
            <Grid height="0.5vh"></Grid>
            <Grid height="0.5vh" ><hr color='#999'/></Grid>
            <Grid height="0.5vh"></Grid>
            <Grid height="2.5vh"><Text h2>Delivery details</Text></Grid>
            <Grid height="2.5vh"><Text h4 style={{marginLeft:"5vw"}}>{getOrderLocation()}</Text></Grid>
            <Grid height="2.5vh"><Text h4 style={{marginLeft:"5vw"}}>Meet at Location</Text></Grid>
            <Grid height="0.5vh"></Grid>
            <Grid height="0.5vh"></Grid>
            <Grid height="2.5vh"><Text h2>Order details</Text></Grid>
            {order ? order.items
              ? order.items.map((item) => {
                  console.log("ajdoajdajoadjas");
                  return (
                    <Grid height="2.5vh"><Text h4 style={{marginLeft:"5vw"}}>{getDonutDetails(item)}</Text></Grid>
                  );
                })
              : null : null}
            <Grid height="10vh"></Grid>
            <Grid style={{position:'absolute', bottom:'2vh'}}><Button auto type="success" style={{width:'100%', marginLeft: '12.5vw'}}>Received Order</Button></Grid>
        </Grid.Container>

      </Grid.Container>


      {/* <Grid.Container gap={2} justify='center'>
        {donutList
          ? donutList.map((donut) => {
              return (
                <Grid>
                </Grid>
              );
            return null;
            })
          : null}
      </Grid.Container> */}
    </div>
  );
}

export default OrderStatus;
