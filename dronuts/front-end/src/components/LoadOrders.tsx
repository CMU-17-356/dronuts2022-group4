import React from 'react';
import NavBarScroller from './NavbarScroller';
// import GoogleMapReact from 'google-map-react'

// component imports
import { Grid, Text, Button } from '@geist-ui/react'
// import google_maps_credentials_file from '../google_maps_api_credentials.json'


export interface Center {
    lat: number,
    lng: number,
}
export interface Location {
    center: Center,
    zoom: number
}

// const default_center = {lat: 40.44, lng: -79.99};
// const default_loc = {center: default_center, zoom: 11};

// bring line down
// Progress bar sections
// pictures next to location, dropoff indicator by for drone, donut images

function LoadOrders() {
  /*
  function getApiCredentials() {
    const key = google_maps_credentials_file.api_key;
    //console.log(key);
    return key;
  }
  */


  return (
    <div className='DonutApp'>
      <NavBarScroller />
      <Grid.Container gap={1}>
          <Grid style={{position:'absolute', bottom:'2vh'}}>
            <Button auto type="success" style={{width:'100%', marginLeft: '30vw'}}>Completed Order</Button>
          </Grid>
          <Grid style={{position:'absolute', bottom:'30vh'}}>
            <Button auto type="success" style={{width:'100%', marginLeft: '30vw'}}>Completed Order</Button>
          </Grid>
      </Grid.Container>
      <Grid.Container gap={4} xs={30} direction='column'>
            <Grid height="2.5vh"></Grid>
            <Grid height="2.5vh"><Text h1 style={{color:"#EF72AC"}}>7:30 PM <span style={{color:'#999'}}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Loading Donuts Instructions</span></Text></Grid>
            <Grid height="0.5vh"></Grid>
            <Grid height="0.5vh" ><hr color='#999'/></Grid>
            <Grid height="0.5vh"></Grid>
            <Grid height="4vh"><Text h2>Load Order #12 to Drone #1</Text></Grid>
            <Grid height="4vh"><Text h4 style={{marginLeft:"5vw"}}>2 Chocolate Donuts with Sprinkles</Text></Grid>
            <Grid height="4vh"><Text h4 style={{marginLeft:"5vw"}}>1 Original Glazed Donut</Text></Grid>
            <Grid height="0.5vh"></Grid>
            <Grid height="0.5vh"></Grid>
            <Grid height="2.5vh"><Text h2>Load Order #13 to Drone #2</Text></Grid>
            <Grid height="2.5vh"><Text h4 style={{marginLeft:"5vw"}}>5 Original Glazed Donuts</Text></Grid>
            <Grid height="2.5vh"><Text h4 style={{marginLeft:"5vw"}}>2 Chocolate Covered Donuts</Text></Grid>
            <Grid height="10vh"></Grid>
        </Grid.Container>
      {}
    </div>
  );
}

export default LoadOrders;
