import React, { useState } from 'react';
// import components
import { Card, Text } from '@geist-ui/react';
import donut_img from '../straw-frosting-donut.png';
import Donut from '../types/Donut';

interface DonutItemProps {
    donut: Donut
}

const DonutAvailabilityItem = (props: DonutItemProps) => {
  let { donut } = props;
  const gray = "#E1E1E1";

  const [cardOpacity, setCardOpacity] = useState(donut.available ? 1.0 : 0.50);

  function clickedCard (){
    if(cardOpacity === 1.0){
      setCardOpacity(0.50);
    } else {
      setCardOpacity(1.0);
    }
  }

  return (
    <button style={{backgroundColor: 'transparent', border: 0}} onClick={clickedCard}><Card
      hoverable
      shadow
      style={{ width: '15vw', backgroundColor: gray, opacity: cardOpacity, alignItems:'center'}}
      type={'lite'}
    >
      <Text h3 style={{ textAlign: 'center', paddingRight: '3vw', textTransform: 'uppercase', color: '#EF72AC' }}>{donut.name}</Text>
      <img src={donut_img} className="donut-logo" alt="donut" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width:'75%', paddingRight: '3vw' }}/>
      <Card.Footer>
        <Text>{donut.description}</Text>
      </Card.Footer>
    </Card></button>
  );
};

export default DonutAvailabilityItem;
