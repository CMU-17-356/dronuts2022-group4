import React, { useState, useEffect } from 'react';
// import './App.css';

// component imports
import { Grid, Text } from '@geist-ui/react';
import DonutAvailabilityItem from './DonutAvailabilityItem';
import type { Donut } from './DonutAvailabilityItem';
//import DisplayToggle from './components/DisplayToggle';


function DonutAvailability() {
  const [donutList, setDonutList] = useState<Array<Donut>>([]);
  // const [showCompleted, setShowCompleted] = useState(false);

  // fetching the async/await way
  async function fetchDonuts() {
    try {
      const response = await fetch('/donuts').then((res) => (res.json()));
      console.log(response);
      setDonutList(response);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchDonuts();
  }, []);

  return (
    <div className='DonutApp'>
      <Text h1>Donut App</Text>
      <Grid.Container gap={2} justify='center'>
        {donutList
          ? donutList.map((donut) => {
              return (
                <Grid>
                  <DonutAvailabilityItem donut={donut} />
                </Grid>
              );
            })
          : null}
      </Grid.Container>
    </div>
  );
}

export default DonutAvailability;
