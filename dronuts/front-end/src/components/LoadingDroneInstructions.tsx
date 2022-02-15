import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

// component imports
import { Grid, Text, Button } from '@geist-ui/react';
import donut_img from '../straw-frosting-donut.png';
import google_maps_credentials_file from '../google_maps_api_credentials.json';


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

function LoadingDroneInstructions() {
  function getApiCredentials() {
    const key = google_maps_credentials_file.api_key;
    //console.log(key);
    return key;
  }

  
  return (
    <div className='DonutApp'>
      <Grid.Container gap={1}>
          <Grid style={{position:'absolute', bottom:'2vh'}}>
            <Button auto type="success" style={{width:'100%', marginLeft: '30vw'}}>Order Queue</Button>
          </Grid>
      </Grid.Container>
      <Grid.Container gap={4} xs={30} direction='column'>
            <Grid height="2.5vh"></Grid>
            <Grid height="2.5vh"><Text h1 style={{color:"#EF72AC"}}>7:30 PM <span style={{color:'#999'}}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Estimated Arrival Time</span></Text></Grid>
            <Grid height="0.5vh"></Grid>
            <Grid height="0.5vh" ><hr color='#999'/></Grid>
            <Grid height="0.5vh"></Grid>
            <Grid height="4vh"><Text h2>Delivery details</Text></Grid>
            <Grid height="4vh"><Text h4 style={{marginLeft:"5vw"}}>5XXX Beeler St, Pittsburgh, PA 15217</Text></Grid>
            <Grid height="4vh"><Text h4 style={{marginLeft:"5vw"}}>Meet at Location</Text></Grid>
            <Grid height="0.5vh"></Grid>
            <Grid height="0.5vh"></Grid>
            <Grid height="2.5vh"><Text h2>Order details</Text></Grid>
            <Grid height="2.5vh"><Text h4 style={{marginLeft:"42.5vw"}}>Chocolate Frosting Donut x 3</Text></Grid>
            <Grid height="2.5vh"><Text h4 style={{marginLeft:"42.5vw"}}>Strawbery Frosting Donut x 5</Text></Grid>
            <Grid height="10vh"></Grid>
        </Grid.Container>
      {}
    </div>
  );
}

export default LoadingDroneInstructions;
