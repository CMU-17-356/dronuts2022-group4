// import React, { useState, useEffect } from 'react';
// import * as ReactDOM from "react-dom";
// let Logo ="https://logrocket-assets.io/static/home-hero-c97849b227a3d3015730e3371a76a7f0.svg";
// function DonutAvailabilityItem() {
//     const [donut_name, setDonutName] = useState("Chocolate Frosting");
//     const [isActive, setActive] = useState(true);

//     return (
//         <div className='App'>
//           <Text h1>Todo App</Text>
//           <AddTodoButton />
//           <DisplayToggle toggleHandler={setShowCompleted} />
//           <Grid.Container gap={2} justify='center'>
//             {todoList
//               ? todoList.map((todo) => {
//                   if (todo.completed === showCompleted) {
//                     return (
//                       <Grid>
//                         <TodoItem todo={todo} />
//                       </Grid>
//                     );
//                   }
//                   return null;
//                 })
//               : null}
//           </Grid.Container>
//         </div>
//       );
// }
//ReactDOM.render(<Hello />, document.getElementById('root'));


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
        <Text p>URL: {donut.img_url}</Text>
        <Tag>ID: {donut.id}</Tag>
      </Card.Footer>
    </Card></button>
  );
};

export default DonutAvailabilityItem;
