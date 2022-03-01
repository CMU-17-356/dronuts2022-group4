import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// component imports
import { Text, Spacer, Card, Divider, Button } from '@geist-ui/react';
import './LoginPageStyle.css'

function AddDonutForm() {
  const [enteredDonutName, setDonutName] = useState<string>('');
  const [enteredDesc, setDesc] = useState<string>('');
  const [enteredURL, setURL] = useState<string>('');
  const [enteredPrice, setPrice] = useState<string>('');
  const [enteredNutritionInfo, setNutritionInfo] = useState<string>('');
  
  const navigate = useNavigate();

  function navigateAdminStore() {
      navigate('/adminstore');
  }

  function handleDonutNameChange(event : React.ChangeEvent<any>) {
    setDonutName(event.target.value);
  }

  function handleDescChange(event : React.ChangeEvent<any>) {
    setDesc(event.target.value);
  }

  function handleURLChange(event : React.ChangeEvent<any>) {
    setURL(event.target.value);
  }

  function handlePriceChange(event : React.ChangeEvent<any>) {
    setPrice(event.target.value);
  }

  function handleNutritionInfoChange(event : React.ChangeEvent<any>) {
    setNutritionInfo(event.target.value);
  }


  function resetEnteredInfo () {
    alert('Incorrect information entered');
    setDonutName('');
    setDesc('');
    setURL('');
    setPrice('');
    setNutritionInfo('');
  }

  async function handleSubmit() {
    if(enteredDonutName === "" ||
       enteredDesc === "" || 
       enteredURL === "" || 
       enteredPrice === "" || 
       enteredNutritionInfo === ""
    ){
        alert("All values must be entered");
        resetEnteredInfo();
        return;
    }

    const donut_name = enteredDonutName;
    const desc = enteredDesc;
    const url = '../straw-frosting-donut.png';
    const price = Number(enteredPrice.replace("$", ""));
    const nutrition_info = enteredNutritionInfo.split(",").map(info => info.trim());
    const new_donut = [{"id": 1, 
                        "name": donut_name, 
                        "price": price, 
                        "description": desc, 
                        "available": true,
                        "img_url": url, 
                        "nutrition_info": nutrition_info
                      }]

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(new_donut)
    };

    try {
        await fetch('/set-donuts', requestOptions).then((res) => (res.json()));
        alert('success');
        navigateAdminStore();
      } catch (e) {
        console.error(e);
        resetEnteredInfo();
      }
    // alert(donut_name + " " + price + " " + desc + " " + url + " " + nutrition_info.reduce((p, c, i) => (p + " " + c)));
  }

  return ( 
    <div className='HomeApp' >
        <Button auto scale={1.5} type="error" style={{ textTransform: 'uppercase', fontWeight: 'bold', position: 'absolute', top: 10, left: 10 }} onClick={navigateAdminStore}>Cancel</Button>
        <Card width="50%" shadow style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>
            <Card.Content>
                <Text h2 style={{fontWeight: 'inherit', margin: 0}}>New Donut Information</Text>
            </Card.Content>
            <Divider h="1px" my={0} style={{color: '#FFF'}}/>
            <Card.Content>
                <form onSubmit={handleSubmit}>
                    <Spacer h={0.5} />
                    <Text h4 style={{marginRight: '50%', fontWeight: 'inherit', margin: 0}}>Donut name</Text>
                    <input type="text" id="dname" name="donutname" placeholder="Donut name" value={enteredDonutName} onChange={handleDonutNameChange}></input>
                    <Spacer h={2} />
                    <Text h4 style={{marginRight: '50%', fontWeight: 'inherit', margin: 0}}>Description</Text>
                    <input type="text" id="desc" name="description" placeholder="Description" value={enteredDesc} onChange={handleDescChange}></input>
                    <Spacer h={2} />
                    <Text h4 style={{marginRight: '50%', fontWeight: 'inherit', margin: 0}}>Image URL</Text>
                    <input type="text" id="imgurl" name="imageurl" placeholder="https://someimage.png" value={enteredURL} onChange={handleURLChange}></input>
                    <Spacer h={2} />
                    <Text h4 style={{marginRight: '50%', fontWeight: 'inherit', margin: 0}}>Price</Text>
                    <input type="text" id="price" name="price" placeholder="$1.99" value={enteredPrice} onChange={handlePriceChange}></input>
                    <Spacer h={2} />
                    <Text h4 style={{marginRight: '50%', fontWeight: 'inherit', margin: 0}}>Nutrition Info</Text>
                    <input type="text" id="nutinfo" name="nutritioninfo" placeholder="Gluten Free, Kosher, ..." value={enteredNutritionInfo} onChange={handleNutritionInfoChange}></input>
                    <Spacer h={2} />
                    <input type="submit" value="Submit" />
                </form>
            </Card.Content>
        </Card>
    </div>
  );
}

export default AddDonutForm;
