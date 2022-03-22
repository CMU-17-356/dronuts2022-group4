import React from 'react';
import { Text, Card, Divider, Badge, Spacer, Grid, Checkbox, Image, Button } from '@geist-ui/react';
import drone_img from '../images/drone.png';
import User from '../types/User';
import Donut from '../types/Donut';

export interface Order {
    id: number,
    customer: number,
    address: string,
    status: string
    purchase_date: Date,
    items: [[Number, Number]],
}

interface OrderItemProps {
    order: Order
    donutList: Array<Donut>
    userList: Array<User>
}

const EmployeeNotificationSystemOrder = (props: OrderItemProps) => {
  let { order, donutList, userList } = props;

  function getCustomerName () {
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

  function getItemDetails (item: [Number, Number]) {
    let item_name = donutList.filter(d => d.id === item[0])[0].name;
    let item_quant = item[1];
    return item_name + " x " + item_quant.toString();
  }

  function getFormattedDate () {
    let date = order.purchase_date.toString();
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);
    let year = date.substring(0, 4);
    return month + "-" + day + "-" + year;
  }

  function completeOrder(){
    let updated_order: Order = {
        "id": order.id,
        "customer": order.customer,
        "address": order.address,
        "status": 'Drone Heading Towards Destination',
        "purchase_date": order.purchase_date,
        "items": order.items
      };
      const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([updated_order]),
      };
      fetch('/set-orders', request).then((resp) => {
        alert('Order completed!');
      }, (err) => {
        alert('Unexpected error updating order.');
      });
  }

  return (
    <div>
        <Card width="100%">
            <Card.Content>
            <Grid.Container gap={2}>
                {
                    (order.status === "Submitted" || order.status === "Drone Heading Towards Destination") && <Grid><Badge type="error">Pending</Badge>  <Spacer h={.5} /></Grid>
                }
                {
                    order.status === "Completed" && <Grid><Badge type="success">Completed</Badge>  <Spacer h={.5} /></Grid>
                }
                <Grid><Text h1 b my={0}>Order #{order.id}</Text></Grid>
                <Spacer w={55} />
                { order.status === "Submitted" && 
                    <Grid><Button auto type="warning" onClick={() => completeOrder()}>Complete</Button></Grid>
                }
                {order.status === "Drone Heading Towards Destination" && 
                    <Grid><Button auto disabled type="warning" >Complete</Button></Grid>
                }
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
                                        order.status === "Submitted" && <Checkbox checked={false} type="default" scale={2.5}>{getItemDetails(item)}</Checkbox>
                                    }
                                    {
                                        order.status === "Drone Heading Towards Destination" && <Checkbox disabled checked={true} type="default" scale={2.5}>{getItemDetails(item)}</Checkbox>
                                    }
                                    {
                                        order.status === "Completed" && <Checkbox disabled checked={true} type="default" scale={2.5}>{getItemDetails(item)}</Checkbox>
                                    }
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
                        <Text h3 style={{marginTop:0}}>Drone #{-1}</Text>
                    </Card.Content>
                </Grid>
                <Grid xs={8} alignContent='center'>
                    <Card.Content style={{textAlign:'center'}}>
                        <Text h2>{getCustomerName()}</Text>
                        <Spacer h={0.1} />
                        <Text h2>{getFormattedDate()}</Text>
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
