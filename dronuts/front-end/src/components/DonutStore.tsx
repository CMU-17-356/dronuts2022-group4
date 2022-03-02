/* DonutStore.tsx */

// Libraries
import { useEffect, useState } from 'react';
import { Button, Grid, Page, Spacer } from '@geist-ui/react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../util/useLocalStorage';

// Types
import Donut from '../types/Donut';
import DonutCart, { EmptyDonutCart } from '../types/DonutCart';

// Local
import DonutStoreItem from './DonutStoreItem';
import NavBarScroller from './NavbarScroller';


function DonutStore() {
  let [donutList, setDonutList] = useState<Array<Donut>>([]);
  let [cart, setCart] = useLocalStorage('cart', EmptyDonutCart);
  /*
  const current_date = new Date();
  const cart_date = new Date(cart.date);
  if (Math.abs(current_date.getTime() - cart_date.getTime()) / 36e5 >= 0) {
    setCart(
      { date: current_date, donuts: {} } as DonutCart
    );
  }
  */

  async function fetchDonuts() {
    try {
      const response = await fetch('/donuts').then((res) => (res.json()));
      setDonutList(response);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchDonuts();
  }, []);

  const navigate = useNavigate();
  function navigateCheckout() {
    navigate('/checkout');
  }

  function updateCart(id: number, quantity: number) {
    let new_donuts = cart.donuts;
    if (quantity === 0) {
      delete new_donuts[id];
    } else {
      new_donuts[id] = quantity;
    }
    setCart({ date: new Date(), donuts: new_donuts } as DonutCart);
  }

  let result = (
    <div className='HomeApp'>
    <NavBarScroller />
    <Page>
    <Grid.Container gap={2} justify='center'>
        {donutList
          ? donutList.filter(donut => donut.available === true).map((donut) => {
              return (
                <Grid>
                  <DonutStoreItem
                    donut={donut}
                    initial_cart= {
                      donut.id in cart.donuts ? cart.donuts[donut.id] : 0
                    }
                    updateCart = { updateCart }
                  />
                </Grid>
              );
            })
          : null}
      </Grid.Container>
      {/* <Grid.Container gap={2} justify='center'>
        {
          donuts.map((donut) => (
            <Grid key={donut.id}>
              <DonutStoreItem
                donut={donut}
                initial_cart= {
                  donut.id in cart.donuts ? cart.donuts[donut.id] : 0
                }
                updateCart = { updateCart }
              />
            </Grid>
          ))
        }
      </Grid.Container> */}
      <Spacer h={2} />
      <Button auto scale={1.5} type="success" style={{ textTransform: 'uppercase', fontWeight: 'bold', position: 'absolute', bottom: 10, right: '45%' }} onClick={navigateCheckout}>Checkout</Button>
    </Page>
    </div>
  );
  return result;
}

export default DonutStore;
