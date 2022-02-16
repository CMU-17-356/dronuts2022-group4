import React, { useState } from 'react';
// import components
import { Card, Tag, Text } from '@geist-ui/react';
import donut_img from '../straw-frosting-donut.png';

export interface Donut {
    id: number,
    name: string,
    img_url: string,
    available: boolean,
  }

interface DonutItemProps {
    donut: Donut
}

const DonutAvailabilityItem = (props: DonutItemProps) => {
  let { donut } = props;
  const pink = "#EF72AC";
  const white = "#FFFFFF";

  const [cardColor, setCardColor] = useState(donut.available ? pink : white);

  function clickedCard (){
    if(cardColor === pink){
      setCardColor(white);
    } else {
      setCardColor(pink);
    }
  }

  return (
    <button style={{backgroundColor: 'transparent', border: 0}} onClick={clickedCard}><Card
      hoverable
      shadow
      style={{ width: '25vw', backgroundColor: cardColor, alignItems:'center'}}
      type={'lite'}
    >
      <Text h4 style={{ textAlign: 'center', paddingRight: '3vw', textTransform: 'uppercase' }}>{donut.name}</Text>
      <img src={donut_img} className="donut-logo" alt="donut" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width:'75%', paddingRight: '3vw' }}/>
      <Card.Footer>
        <Tag>ID: {donut.id}</Tag>
      </Card.Footer>
    </Card></button>
  );
};

export default DonutAvailabilityItem;
