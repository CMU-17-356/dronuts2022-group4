import { Card, Divider, Grid, Image, Progress, Text } from '@geist-ui/react';
import droneImg from '../images/drone.png';

function DroneStatus() {
  const colors = {
    33: "red",
    66: "#FFA500",
    100: "green"
  }
  
  return (
    <Grid.Container gap={2}>
      <Grid xs={24}><Text h2>Drone Status</Text></Grid>
      <Divider h={5} />
      <Grid xs={6} justify="center">
        <Card shadow width="90%">
          <Image src={droneImg}/>
          <Text h4>Drone 1</Text>
          <Text>98% battery</Text>
          <Progress value={98} colors={colors} width="90%" />
          <Text type="success">Delivering</Text>
        </Card>
      </Grid>
      <Grid xs={6} justify="center">
        <Card shadow width="90%">
          <Image src={droneImg}/>
          <Text h4>Drone 2</Text>
          <Text>11% battery</Text>
          <Progress value={11} colors={colors} width="90%"/>
          <Text>Returning</Text>
        </Card>
      </Grid>
      <Grid xs={6} justify="center">
        <Card shadow width="90%">
          <Image src={droneImg}/>
          <Text h4>Drone 3</Text>
          <Text>50% battery</Text>
          <Progress value={50} colors={colors} width="90%" />
          <Text>Idle</Text>
        </Card>
      </Grid>
      <Grid xs={6} justify="center">
        <Card shadow width="90%">
          <Image src={droneImg}/>
          <Text h4>Drone 4</Text>
          <Text>6% battery</Text>
          <Progress value={6} colors={colors} width="90%" />
          <Text type="warning">Charging</Text>
        </Card>
      </Grid>
    </Grid.Container>
  );
}

export default DroneStatus