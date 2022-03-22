import React from 'react';
import { Card, Divider, Grid, Image, Progress, Text } from '@geist-ui/react';
import droneImg from '../images/drone.png';
import NavBarScroller from './NavbarScroller';


interface DroneProps {}

class DroneStatus extends React.Component {
  colors = {
    33: "red",
    66: "#FFA500",
    100: "green"
  };

  constructor(props: DroneProps) {
    super(props);
    this.state = {
      drones: []
    };
  }

  async componentDidMount() {
    const drones_res = await fetch('http://drones.17-356.isri.cmu.edu/airbase/dronuts').then((res) => (res.json()));
    for (const drone_id of drones_res.body.drones) {
      // fields: battery capacity, location, and delivery status
      const drone_res = await fetch(`http://drones.17-356.isri.cmu.edu/drones/${drone_id}`).then((res) => (res.json()));
      this.setState({
        drones: this.state.drones.append(drone_res.body)
      });
    }
  }

  render() {
    return (
      <div className='HomeApp'>
      <NavBarScroller />
  
      <Grid.Container gap={2}>
        <Grid xs={24}><Text h2>Drone Status</Text></Grid>
        <Divider h={5} />
        {this.state.drones.map((drone) => {
          return (
            <Grid xs={6} justify="center">
              <Card shadow width="90%">
                <Image src={droneImg}/>
                <Text h4>{drone.id}</Text>
                <Text>{`${drone.battery}% battery`}</Text>
                <Progress value={drone.battery} colors={this.colors} width="90%" />
                <Text type="success">{drone.status}</Text>
              </Card>
            </Grid>
          );
        })}
      </Grid.Container>
      </div>
    );
  }
}

export default DroneStatus