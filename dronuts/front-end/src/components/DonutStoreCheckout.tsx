/* DonutStoreCheckout.tsx */

// Libraries
import { useState, useEffect } from 'react';
import {
  Button,
  Card,
  Divider,
  Input,
  Page,
  Text
} from '@geist-ui/react';
import useLocalStorage from '../util/useLocalStorage';

// Types

import Donut from '../types/Donut';
import { EmptyDonutCart } from '../types/DonutCart';
import User, { EmptyUser } from '../types/User';

// Local
import NavBarScroller from './NavbarScroller';


function DonutStoreCheckout() {
  let cart = useLocalStorage('cart', EmptyDonutCart)[0].donuts;
  let currentUser: User = useLocalStorage('user', EmptyUser)[0];
  let [donuts, setDonuts] = useState<Array<Donut>>([]);
  let [customerName, setCustomerName] = useState(
    (currentUser.first_name.length + currentUser.last_name.length) ?
    currentUser.first_name + ' ' + currentUser.last_name :
    ''
  );
  let [address, setAddress] = useState('');
  let [cardName, setCardName] = useState('');
  let [cardNum, setCardNum] = useState('');
  let [cardExpDate, setCardExpDate] = useState('');
  let [cardSecCode, setCardSecCode] = useState('');

  let donutCart = donuts.filter((donut) => (
    donut.id in cart
  )).map((donut) => (
    {
      donut: donut.name,
      price: donut.price,
      quantity: cart[donut.id]
    }
  ));

  async function fetchDonuts() {
    try {
      const response = await fetch('/donuts').then((res) => (res.json()));
      setDonuts(response);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchDonuts();
  }, []);

  let cartTotalPrice = donutCart
    .map(d => d.price * d.quantity)
    .reduce((p, c) =>  p + c, 0.00);

  let result = (
    <div className = "HomeApp">
    <NavBarScroller/>
    <Page>
      <Card>
        <Text h3>Order Details</Text>
        { donutCart.map((donut) => (
          <Text>
            { donut.donut } <em>(${ donut.price })</em> x
            { donut.quantity }
          </Text>
        ))}
        <Divider />
        Total: <b>${ cartTotalPrice }</b>
      </Card>
      <Card>
        <Text h3>Delivery Details</Text>
        <Input value={customerName} onChange={(e) => setCustomerName(e.target.value)}>Name</Input>
        <Input value={address} onChange={(e) => setAddress(e.target.value)}>Address</Input>
      </Card>
      <Card>
        <Text h3>Credit Card Details</Text>
        <Input value={cardName} onChange={(e) => setCardName(e.target.value)}>Name</Input>
        <Input value={cardNum} onChange={(e) => setCardNum(e.target.value)}>Number</Input>
        <Input value={cardExpDate} placeholder="01/30" onChange={(e) => setCardExpDate(e.target.value)}>Expiration Date</Input>
        <Input value={cardSecCode} onChange={(e) => setCardSecCode(e.target.value)}>Security Code</Input>
      </Card>
      <Button>Place Order</Button>
    </Page>
    </div>

  );
  return result;
}

export default DonutStoreCheckout;
