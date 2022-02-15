/* DonutStoreItem.tsx */

// Libraries
import { useState } from 'react';
import { Button, ButtonGroup, Card } from '@geist-ui/react';

// Assets
import donut_img from '../straw-frosting-donut.png';


export interface Donut {
  id: number;
  name: string;
  img_url: string;
  available: boolean;
}

// TODO: Add a hook for cart quantities in props
interface DonutStoreItemProps {
  donut: Donut;
  initial_cart: number;
}

function DonutStoreItem(props: DonutStoreItemProps) {
  let { donut, initial_cart} = props;
  const [cart, setCart] = useState(initial_cart);
  let cart_button = donut.available ?
    (
      <ButtonGroup>
        <Button onClick={() => setCart(Math.max(0, cart - 1))}>-</Button>
        <Button disabled>{ cart }</Button>
        <Button onClick={() => setCart(Math.min(5, cart + 1))}>+</Button>
     </ButtonGroup>
    ) :
    (
      <ButtonGroup disabled>
        <Button onClick={() => setCart(Math.max(0, cart - 1))}>-</Button>
        <Button disabled>{ cart }</Button>
        <Button onClick={() => setCart(Math.min(5, cart + 1))}>+</Button>
      </ButtonGroup>
    );
  let result = (
    <Card style={{width: '30vw'}}>
      { donut.name }
      <img src={donut_img} alt={donut.name} width='75%' />
      { cart_button }
    </Card>
  );
  return result;
}

export default DonutStoreItem;
