import React, { useState, useEffect } from 'react';
// import './App.css';

// component imports
import { Grid, Spacer, Button, Page } from '@geist-ui/react';
import DonutAvailabilityItem from './DonutAvailabilityItem';
import Donut from '../types/Donut';
import NavBarScroller from './NavbarScroller';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();
  function navigateAddDount() {
    navigate('/adddonut');
  }

  return (
    <div className='DonutApp'>
      <NavBarScroller />
      <Page>
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
      <Spacer h={2} />
      <Button auto scale={1.5} type="success" style={{ textTransform: 'uppercase', fontWeight: 'bold', position: 'absolute', bottom: 10, right: '45%'}} onClick={navigateAddDount}>Add Donut</Button>
      </Page>
    </div>
  );
}

export default DonutAvailability;
