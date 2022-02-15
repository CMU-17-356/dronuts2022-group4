/* DonutStore.tsx */

// Libraries
import { useEffect, useState } from 'react';
import { Button, Grid, Page } from '@geist-ui/react';

// Local
import DonutStoreItem from './DonutStoreItem';
import type { Donut } from './DonutStoreItem';


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

  let result = (
    <Page>
      <Grid.Container gap={2} justify='center'>
        {
          donuts.map((donut) => (
            <Grid>
              <DonutStoreItem donut={donut} initial_cart={0} />
            </Grid>
          ))
        }
      </Grid.Container>
      <Button>Checkout</Button>
    </Page>
  );
  return result;
}

export default DonutStore;
