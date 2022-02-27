import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// component imports
import { Text, Image, Button, Spacer, Textarea, Card, Divider } from '@geist-ui/react';
import dronutLogoImg from '../images/dronut.png';
import './LoginPageStyle.css'

interface User {
    id: number,
    first_name: string,
    last_name: string,
    phone_number: string,
    username: string,
    password: string,
    access_level: string
}

function LoginPage() {
  const [enteredUsername, setEnteredUsername] = useState<string>('');
  const [enteredPassword, setEnteredPassword] = useState<string>('');
  const [userList, setUserList] = useState<Array<User>>([]);

  const navigate = useNavigate();

  function navigateAdminStore() {
      navigate('/adminstore');
  }

  function navigateENS() {
    navigate('/empnotsys');
  }

  function navigateHome() {
    navigate('/');
  }

  function handleUsernameChange(event : React.ChangeEvent<any>) {
    setEnteredUsername(event.target.value);
  }

  function handlePasswordChange(event : React.ChangeEvent<any>) {
    setEnteredPassword(event.target.value);
  }


  function resetEnteredInfo () {
    alert('Incorrect information entered');
    setEnteredUsername('');
    setEnteredPassword('');
    
  }

  function handleSubmit() {
    const users = userList.filter(u => u.username === enteredUsername);
    if (users.length === 0){
        resetEnteredInfo();
        return;
    } 
    const user_password = users[0].password;
    const user_access_level = users[0].access_level;
    if (user_password === enteredPassword){
        switch (user_access_level) {
            case 'owner':
                navigateAdminStore();
                return;
            case 'employee':
                navigateENS();
                return;
            default:
                resetEnteredInfo();
                return;
        }
    }
  }

  async function fetchUsers() {
    try {
      const response = await fetch('/users').then((res) => (res.json()));
      console.log(response);
      setUserList(response);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return ( 
    <div className='HomeApp' >
        <Card width="50%" shadow style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '4em'}}>
            <Image width="30%"  src={dronutLogoImg} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '1em'}}/>
            <Spacer h={3} />
        {/* <Text h2 style={{marginRight: '50%', fontWeight: 'inherit'}}>Sign In</Text> */}
        
        
            {/* <form onSubmit={this.handleSubmit}> */}
            <Card.Content>
                <Text h2 style={{fontWeight: 'inherit', margin: 0}}>Sign In</Text>
            </Card.Content>
            <Divider h="1px" my={0} style={{color: '#FFF'}}/>
            <Card.Content>
                <form onSubmit={handleSubmit}>
                    <Spacer h={0.5} />
                    <Text h4 style={{marginRight: '50%', fontWeight: 'inherit', margin: 0}}>Username</Text>
                    <input type="text" id="uname" name="username" placeholder="Usename" value={enteredUsername} onChange={handleUsernameChange}></input>
                    {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
                    <Spacer h={2} />
                    <Text h4 style={{marginRight: '50%', fontWeight: 'inherit', margin: 0}}>Password</Text>
                    <input type="text" id="pass" name="password" placeholder="Password" value={enteredPassword} onChange={handlePasswordChange}></input>
                    {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
                    <Spacer h={2} />
                    <input type="submit" value="Submit" />
                </form>
            </Card.Content>
        </Card>
        
        {/* <Button auto scale={1.5} type="success" style={{ textTransform: 'uppercase', fontWeight: 'bold'}} onClick={navigateStore}>View Donuts</Button> */}
    </div>
  );
}

export default LoginPage;
