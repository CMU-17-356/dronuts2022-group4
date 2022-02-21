/* DonutStore.tsx */

// Libraries
import { useEffect, useState } from 'react';
import { Button, Grid, Page } from '@geist-ui/react';
import { useNavigate } from 'react-router-dom';

// Local
import DonutStoreItem from './DonutStoreItem';
import type { Donut } from './DonutStoreItem';
import NavBarScroller from './NavbarScroller';


interface DonutStoreProps {
}

// TODO: Pass hook and keep track of cart quantities
function DonutStore(props: DonutStoreProps) {
  let [donuts, setDonuts] = useState<Array<Donut>>([]);

  async function fetchDonuts() {
    try {
      const donuts_response = await fetch('/donuts').then((res) => res.json());
      setDonuts(donuts_response);
    }
    catch (e) {
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

  let result = (
    <Page>
      <NavBarScroller />
      <Grid.Container gap={2} justify='center'>
        {
          donuts.map((donut) => (
            <Grid>
              <DonutStoreItem donut={donut} initial_cart={0} />
            </Grid>
          ))
        }
      </Grid.Container>
      <Button onClick={navigateCheckout}>Checkout</Button>
    </Page>
  );
  return result;
}

export default DonutStore;
