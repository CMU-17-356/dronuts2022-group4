import React, { useState } from 'react';
// import './App.css';

// component imports
import { Page, Text, Card, Divider, Badge, Spacer, Grid, Checkbox, Image } from '@geist-ui/react';
import drone_img from '../images/drone.png';

function EmployeeNotificationSystem() {
  const orderList = useState<Array<String>>(["o1", "o2", "o3", "o4", "o5"])[0];

  // TO DO: Set up data retrieval for pages
  // fetching the async/await way
//   async function fetchDonuts() {
//     try {
//       const response = await fetch('/donuts').then((res) => (res.json()));
//       console.log(response);
//       setOrderList(response);
//     } catch (e) {
//       console.error(e);
//     }
//   }

//   useEffect(() => {
//     fetchDonuts();
//   }, []);

  return (
    <div className='EmpNotSystem'>
      <Text h2 style={{marginLeft:'1em', marginBottom:'-1em'}}>Pending Orders</Text>
      <Page>
        {orderList
          ? orderList.map((donut) => {
              return (
                <div>
                    <Card width="100%">
                        <Card.Content>
                        <Grid.Container gap={2}>
                        <Grid><Badge type="error">Pending</Badge>  <Spacer h={.5} /></Grid>
                        <Grid><Text h1 b my={0}>Order #786</Text></Grid>
                        </Grid.Container>
                        </Card.Content>
                        <Divider h="1px" my={0} />
                        <Grid.Container>
                            <Grid xs={10}>
                                <Card.Content>
                                    <Checkbox checked={false} type="default" scale={2.5}>Chocolate frosting donut x 3</Checkbox>
                                    <Spacer h={3} />
                                    <Checkbox checked={false} type="default" scale={2.5}>Strawberry frosting donut x 3</Checkbox>
                                    <Spacer h={3} />
                                    <Checkbox checked={true} type="default" scale={2.5}>Vanilla frosting donut with sprinkles x 3</Checkbox>
                                    <Spacer h={3} />
                                </Card.Content>
                            </Grid>
                            <Grid xs={6} alignContent='center'>
                                <Card.Content style={{textAlign:'center'}}>
                                    <Image width="300px" height="160px" draggable={false} src={drone_img} style={{marginBottom:0}}/>
                                    <Text h3 style={{marginTop:0}}>Drone #3</Text>
                                </Card.Content>
                            </Grid>
                            <Grid xs={8} alignContent='center'>
                                <Card.Content style={{textAlign:'center'}}>
                                    <Text h2>Max Duna</Text>
                                    <Spacer h={0.1} />
                                    <Text h2>02/15/2022</Text>
                                    <Spacer h={0.1} />
                                    <Text h2>ETA ~ 7:43 PM</Text>
                                </Card.Content>
                            </Grid>
                        </Grid.Container>
                    </Card>
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
          ? orderList.map((donut) => {
              return (
                <div>
                    <Card width="100%">
                        <Card.Content>
                        <Grid.Container gap={2}>
                        <Grid><Badge type="success">Completed</Badge>  <Spacer h={.5} /></Grid>
                        <Grid><Text h1 b my={0}>Order #786</Text></Grid>
                        </Grid.Container>
                        </Card.Content>
                        <Divider h="1px" my={0} />
                        <Grid.Container>
                            <Grid xs={10}>
                                <Card.Content>
                                    <Checkbox disabled checked={true} type="default" scale={2.5}>Chocolate frosting donut x 3</Checkbox>
                                    <Spacer h={3} />
                                    <Checkbox disabled checked={true} type="default" scale={2.5}>Strawberry frosting donut x 3</Checkbox>
                                    <Spacer h={3} />
                                    <Checkbox disabled checked={true} type="default" scale={2.5}>Vanilla frosting donut with sprinkles x 3</Checkbox>
                                    <Spacer h={3} />
                                </Card.Content>
                            </Grid>
                            <Grid xs={6} alignContent='center'>
                                <Card.Content style={{textAlign:'center'}}>
                                    <Image width="300px" height="160px" draggable={false} src={drone_img} style={{marginBottom:0}}/>
                                    <Text h3 style={{marginTop:0}}>Drone #3</Text>
                                </Card.Content>
                            </Grid>
                            <Grid xs={8} alignContent='center'>
                                <Card.Content style={{textAlign:'center'}}>
                                    <Text h2>Max Duna</Text>
                                    <Spacer h={0.1} />
                                    <Text h2>02/15/2022</Text>
                                    <Spacer h={0.1} />
                                    <Text h2>ETA ~ 7:23 PM</Text>
                                </Card.Content>
                            </Grid>
                        </Grid.Container>
                    </Card>
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
