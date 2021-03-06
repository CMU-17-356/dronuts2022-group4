import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// component imports
import { Text, Spacer, Card, Divider, Button} from '@geist-ui/react';
import './LoginPageStyle.css'
import User from '../types/User';

function SignUpForm() {
  const [enteredFirstName, setEnteredFirstName] = useState<string>('');
  const [enteredLastName, setEnteredLastName] = useState<string>('');
  const [enteredEmail, setEnteredEmail] = useState<string>('');
  const [enteredPhone, setEnteredPhone] = useState<string>('');
  const [enteredUsername, setEnteredUsername] = useState<string>('');
  const [enteredPassword, setEnteredPassword] = useState<string>('');
  const [donutID, setDonutID] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [enteredAccessLevel, setEnteredAccessLevel] = useState<string>('employee');
  
  const navigate = useNavigate();

  function navigateHome() {
    navigate('/');
  }

  function handleFirstNameChange(event : React.ChangeEvent<any>) {
    setEnteredFirstName(event.target.value);
  }

  function handleLastNameChange(event : React.ChangeEvent<any>) {
    setEnteredLastName(event.target.value);
  }

  function handleEmailChange(event : React.ChangeEvent<any>) {
    setEnteredEmail(event.target.value);
  }

  function handlePhoneChange(event : React.ChangeEvent<any>) {
    setEnteredPhone(event.target.value);
  }

  function handleUsernameChange(event : React.ChangeEvent<any>) {
    setEnteredUsername(event.target.value);
  }

  function handlePasswordChange(event : React.ChangeEvent<any>) {
    setEnteredPassword(event.target.value);
  }


  function resetEnteredInfo () {
    setEnteredFirstName('');
    setEnteredLastName('');
    setEnteredEmail('');
    setEnteredPhone('');
    setEnteredUsername('');
    setEnteredPassword('');
    setEnteredAccessLevel('employee');
  }


  async function getMaxID(){
    try{
      const response : Array<User> = await fetch('/users').then((res) => (res.json()));
      var max_id = 0;
      if(response.length > 0){
        const ids = response.map((donut) => donut.id);
        max_id = ids.reduce((prevId, newId, index)=>Math.max(prevId, newId), 0);
      }
      console.log(max_id + 1);
      setDonutID(max_id + 1);
    } catch (e){
      console.error(e);
    }
  }

  useEffect(() => {
    getMaxID();
  }, []);

  async function handleSubmit() {
    if(enteredFirstName === "" ||
       enteredLastName === "" || 
       enteredEmail === "" || 
       enteredPhone === "" || 
       enteredUsername === "" || 
       enteredPassword === "" ||
       enteredAccessLevel === ""
    ){
        alert("All values must be entered");
        resetEnteredInfo();
        return;
    }

    try {
        var id = donutID;
        const first_name = enteredFirstName;
        const last_name = enteredLastName;
        const email = enteredEmail;
        const phone = enteredPhone;
        const username = enteredUsername;
        const password = enteredPassword;
        const access_level = enteredAccessLevel;
        const new_user = [{"id": id, 
                            "first_name": first_name, 
                            "last_name": last_name, 
                            "email": email,
                            "phone_number": phone, 
                            "username": username,
                            "password": password, 
                            "access_level": access_level
                          }];
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(new_user)
        };
        
        await fetch('/set-users', requestOptions).then((res) => (res.json()));
      } catch (e) {
        resetEnteredInfo();
      }
      setSubmitted(false);
  }

  useEffect(() => {
    if(submitted){
      handleSubmit();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted]);
  
  function handlerAccessLevel(event: React.ChangeEvent<any>) {
    let value_access = "employee";
    if(event.target.value === "2"){
      value_access = "owner";
      console.log(value_access);
    } else if(event.target.value === "3") {
      value_access = "customer";
      console.log(value_access);
    } else {
      value_access = "employee";
      console.log(value_access);
    }
    setEnteredAccessLevel(value_access);
  }




  return ( 
    <div className='HomeApp' >
        <Button auto scale={1.5} type="error" style={{ textTransform: 'uppercase', fontWeight: 'bold', position: 'absolute', top: 10, left: 10 }} onClick={navigateHome}>Cancel</Button>
        <Card width="50%" shadow style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>
            <Card.Content>
                <Text h2 style={{fontWeight: 'inherit', margin: 0}}>New Donut Information</Text>
            </Card.Content>
            <Divider h="1px" my={0} style={{color: '#FFF'}}/>
            <Card.Content>
                <form onSubmit={() => setSubmitted(true)}>
                    <Spacer h={0.5} />
                    <Text h4 style={{marginRight: '50%', fontWeight: 'inherit', margin: 0}}>First name</Text>
                    <input type="text" id="fname" name="firstname" placeholder="John" value={enteredFirstName} onChange={handleFirstNameChange}></input>
                    <Spacer h={1} />
                    <Text h4 style={{marginRight: '50%', fontWeight: 'inherit', margin: 0}}>Last name</Text>
                    <input type="text" id="lname" name="lastname" placeholder="Doe" value={enteredLastName} onChange={handleLastNameChange}></input>
                    <Spacer h={1} />
                    <Text h4 style={{marginRight: '50%', fontWeight: 'inherit', margin: 0}}>Email</Text>
                    <input type="text" id="email" name="email" placeholder="johndoe6@gmail.com" value={enteredEmail} onChange={handleEmailChange}></input>
                    <Spacer h={1} />
                    <Text h4 style={{marginRight: '50%', fontWeight: 'inherit', margin: 0}}>Phone Number</Text>
                    <input type="text" id="phone" name="phonenumber" placeholder="1234567890" value={enteredPhone} onChange={handlePhoneChange}></input>
                    <Spacer h={1} />
                    <Text h4 style={{marginRight: '50%', fontWeight: 'inherit', margin: 0}}>Username</Text>
                    <input type="text" id="uname" name="username" placeholder="johnlovesdonuts6" value={enteredUsername} onChange={handleUsernameChange}></input>
                    <Spacer h={1} />
                    <Text h4 style={{marginRight: '50%', fontWeight: 'inherit', margin: 0}}>Password</Text>
                    <input type="text" id="pass" name="password" placeholder="iLUVdonuts" value={enteredPassword} onChange={handlePasswordChange}></input>
                    <Spacer h={1} />
                    <Text h4 style={{marginRight: '50%', fontWeight: 'inherit', margin: 0}}>User Type</Text>
                    <select name="usertypes" id="utypes" onChange = {handlerAccessLevel}>
                      <option value="1">Donut Store Employee</option>
                      <option value="2">Donut Store Owner</option>
                      <option value="3">Donut Store Customer</option>
                    </select>


                    <input type="submit" value="Submit" />
                </form>
            </Card.Content>
        </Card>
    </div>
  );
}

export default SignUpForm;
