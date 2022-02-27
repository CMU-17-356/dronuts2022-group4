/* DonutStoreItem.tsx */

// Libraries
import { useState, useEffect } from 'react';
import { Button, ButtonGroup, Card, Text} from '@geist-ui/react';

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
      <ButtonGroup style={{marginLeft: '6em'}}>
        <Button onClick={() => boundedCart(cart - 1)} style={{margin: 0}}>-</Button>
        <Button disabled style={{margin: '0'}}>{ cart }</Button>
        <Button onClick={() => boundedCart(cart + 1)} style={{margin: 0}}>+</Button>
     </ButtonGroup>
    ) :
    (
      <ButtonGroup disabled style={{marginLeft: '6em'}}>
        <Button onClick={() => boundedCart(cart - 1)} style={{margin: 0}}>-</Button>
        <Button style={{margin: '0'}} disabled>{ cart }</Button>
        <Button onClick={() => boundedCart(cart + 1)} style={{margin: 0}}>+</Button>
      </ButtonGroup>
    );

  let result = (
    <div className='HomeApp' >
      <Card
      hoverable
      shadow
      style={{ width: '25vw', alignItems:'center'}}
      type={'lite'}
      >
        <Text h3 style={{ textAlign: 'center', paddingRight: '3vw', textTransform: 'uppercase', color: '#EF72AC' }}>{donut.name}</Text>
        <img src={donut_img} className="donut-logo" alt="donut" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width:'75%', paddingRight: '3vw' }}/>
        <Text h4 style={{ textAlign: 'center', paddingRight: '3vw', fontWeight: 'inherent' }}>{donut.description}</Text>
        <Card.Footer >
          { cart_button }
        </Card.Footer>
      </Card>
      {/* <Card style={{width: '30vw'}}>
        { donut.name }
        <img src={donut_img} alt={donut.name} width='75%' />
        { cart_button }
      </Card> */}
    </div>
  );
  return result;
}

export default DonutStoreItem;
