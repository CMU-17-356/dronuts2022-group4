/* DonutStoreItem.tsx */

// Libraries
import { useState, useEffect } from 'react';
import { Button, ButtonGroup, Card } from '@geist-ui/react';

// Types
import Donut from '../types/Donut';

// Assets
import donut_img from '../straw-frosting-donut.png';


interface DonutStoreItemProps {
  donut: Donut;
  initial_cart: number;
  updateCart: (id: number, quantity: number) => void;
}

function DonutStoreItem(props: DonutStoreItemProps) {
  let { donut, initial_cart, updateCart } = props;
  const [cart, setCart] = useState(initial_cart);

  const boundedCart = (quantity: number) => {
    setCart(Math.max(0, Math.min(5, quantity)));
  };

  useEffect(() => {
    updateCart(donut.id, cart);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  let cart_button = donut.available ?
    (
      <ButtonGroup>
        <Button onClick={() => boundedCart(cart - 1)}>-</Button>
        <Button disabled>{ cart }</Button>
        <Button onClick={() => boundedCart(cart + 1)}>+</Button>
     </ButtonGroup>
    ) :
    (
      <ButtonGroup disabled>
        <Button onClick={() => boundedCart(cart - 1)}>-</Button>
        <Button disabled>{ cart }</Button>
        <Button onClick={() => boundedCart(cart + 1)}>+</Button>
      </ButtonGroup>
    );
  let result = (
    <div className='HomeApp' >
    <Card style={{width: '30vw'}}>
      { donut.name }
      <img src={donut_img} alt={donut.name} width='75%' />
      { cart_button }
    </Card>
    </div>
  );
  return result;
}

export default DonutStoreItem;
