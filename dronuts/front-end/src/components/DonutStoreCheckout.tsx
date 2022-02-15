/* DonutStoreCheckout.tsx */

// Libraries
import { useState } from 'react'
import { Button, Card, Input, Page, Text } from '@geist-ui/react'

// Local
import type { Donut } from './DonutStoreItem'


interface DonutStoreCheckoutProps {
  donuts: Array<[Donut, number]>;
}

function DonutStoreCheckout(props: DonutStoreCheckoutProps) {
  let { donuts } = props;
  let [customerName, setCustomerName] = useState('');
  let [address, setAddress] = useState('');
  let [cardName, setCardName] = useState('');
  let [cardNum, setCardNum] = useState('');
  let [cardExpDate, setCardExpDate] = useState('');
  let [cardSecCode, setCardSecCode] = useState('');

  let result = (
    <Page>
      <Card>
        <Text h3>Order Details</Text>
        { donuts.map((donut) => (
          <Text>{ donut[0].name } x { donut[1] }</Text>
        ))}
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
  );
  return result;
}

export default DonutStoreCheckout;
