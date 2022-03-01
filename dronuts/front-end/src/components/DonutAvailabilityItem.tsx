import React, { useEffect, useState } from 'react';
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
  const [active, setActive] = useState(donut.available ? true : false);

  function clickedCard (){
    // Set value to disabled
    if(cardOpacity === 1.0){
      setCardOpacity(0.50);
      setActive(false);
    } else {
      setCardOpacity(1.0);
      setActive(true);
    }
  }

  async function setAvailabilityStatus() {
    try {
        const new_donut = [{"id": donut.id, 
                            "name": donut.name, 
                            "price": donut.price, 
                            "description": donut.description, 
                            "available": active,
                            "img_url": donut.img_url, 
                            "nutrition_info": donut.nutrition_info
                          }];

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(new_donut)
        };

        await fetch('/set-donuts', requestOptions).then((res) => (res.json()));
      } catch (e) {
        console.error(e);
      }
  }

  useEffect(() => {
    setAvailabilityStatus();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, clickedCard]);

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
