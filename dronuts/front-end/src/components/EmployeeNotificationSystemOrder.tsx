import React from 'react';
// import './App.css';

// component imports
import { Text, Card, Divider, Badge, Spacer, Grid, Checkbox, Image, Button } from '@geist-ui/react';
import drone_img from '../images/drone.png';

export interface Order {
    id: number,
    items: [string],
    drone_id: number,
    customer_name: string,
    date: string,
    status: string
}

interface OrderItemProps {
    order: Order
}

const EmployeeNotificationSystemOrder = (props: OrderItemProps) => {
  let { order } = props;

  function completeOrder(order : Order){
      order.status = "completed"; // Ideally this should make a post request to database to update value
  }

  return (
    <div>
        <Card width="100%">
            <Card.Content>
            <Grid.Container gap={2}>
                {
                    order.status === "pending" && <Grid><Badge type="error">Pending</Badge>  <Spacer h={.5} /></Grid>
                }
                {
                    order.status === "completed" && <Grid><Badge type="success">Completed</Badge>  <Spacer h={.5} /></Grid>
                }
                {/* <Grid><Badge type="error">Pending</Badge>  <Spacer h={.5} /></Grid>
                <Grid><Badge type="success">Completed</Badge>  <Spacer h={.5} /></Grid> */}
                <Grid><Text h1 b my={0}>Order #{order.id}</Text></Grid>
                <Spacer w={55} />
                <Grid><Button auto type="warning" onClick={() => completeOrder(order)}>Complete</Button></Grid>
            </Grid.Container>
            </Card.Content>
            <Divider h="1px" my={0} />
            <Grid.Container>
                <Grid xs={10}>
                    <Card.Content>
                        {order.items
                        ? order.items.map((item) => {
                            return (
                                <>
                                    {
                                        order.status === "pending" && <Checkbox checked={false} type="default" scale={2.5}>{item}</Checkbox>
                                    }
                                    {
                                        order.status === "completed" && <Checkbox disabled checked={true} type="default" scale={2.5}>{item}</Checkbox>
                                    }
                                    {/* <Checkbox checked={false} type="default" scale={2.5}>{item}</Checkbox> */}
                                    <Spacer h={3} />
                                </>
                            );
                        })
                        : null}
                    </Card.Content>
                </Grid>
                <Grid xs={6} alignContent='center'>
                    <Card.Content style={{textAlign:'center'}}>
                        <Image width="300px" height="160px" draggable={false} src={drone_img} style={{marginBottom:0}}/>
                        <Text h3 style={{marginTop:0}}>Drone #{order.drone_id}</Text>
                    </Card.Content>
                </Grid>
                <Grid xs={8} alignContent='center'>
                    <Card.Content style={{textAlign:'center'}}>
                        <Text h2>{order.customer_name}</Text>
                        <Spacer h={0.1} />
                        <Text h2>{order.date}</Text>
                        <Spacer h={0.1} />
                        <Text h2>ETA ~ 7:43 PM</Text>
                    </Card.Content>
                </Grid>
            </Grid.Container>
        </Card>
        <Spacer h={3} />
    </div>
  );
}

export default EmployeeNotificationSystemOrder;
