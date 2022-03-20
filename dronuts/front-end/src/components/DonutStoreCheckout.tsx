/* DonutStoreCheckout.tsx */

// Libraries
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import Order from '../types/Order';

// Local
import NavBarScroller from './NavbarScroller';


function DonutStoreCheckout() {
  const [cart, setCart] = useLocalStorage('cart', EmptyDonutCart);
  let currentUser: User = useLocalStorage('user', EmptyUser)[0];

  let [submitted, setSubmitted] = useState<boolean>(false);
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

  let [maxID, setMaxID] = useState(0);

  const navigate = useNavigate();

  let donutCart = donuts.filter((donut) => (
    donut.id in cart.donuts
  )).map((donut) => (
    {
      id: donut.id,
      name: donut.name,
      price: donut.price,
      quantity: cart.donuts[donut.id]
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

  function getMaxID() {
    fetch('/orders').then((resp) => {
      return resp.json() as Promise<Array<Order>>;
    }).then((response: Array<Order>) => {
      const ids = response.map((order: Order) => order.id);
      setMaxID(ids.reduce((l: number, r: number) => Math.max(l, r), -1) + 1);
    });
  }

  useEffect(() => {
    fetchDonuts();
    getMaxID();
  }, []);

  useEffect(() => {
    if (submitted) {
      submitOrder();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted]);

  function submitOrder() {
    if (
      customerName.length === 0 ||
      address.length === 0 ||
      cardName.length === 0 ||
      cardNum.length === 0 ||
      cardExpDate.length === 0 ||
      cardSecCode.length === 0
    ) {
      setSubmitted(false);
      alert('Please fill out all information.');
      return;
    }
    let current_order: Order = {
      "id": maxID,
      "customer": currentUser.id,
      "address": address,
      "status": 'Submitted',
      "purchase_date": new Date(),
      "items": donutCart.map((donut) => [donut.id, donut.quantity]),
    };
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify([current_order]),
    };
    fetch('/set-orders', request).then((resp) => {
      alert('Order submitted!');
      setSubmitted(false);
      setCart(EmptyDonutCart);
      navigate('/orderstatus');
    }, (err) => {
      alert('Unexpected error submitting order.');
    });
  }

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
            { donut.name } <em>(${ donut.price })</em> x
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
      <Button onClick={() => setSubmitted(true)}>Place Order</Button>
    </Page>
    </div>

  );
  return result;
}

export default DonutStoreCheckout;
