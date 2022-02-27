import React from 'react';
import { useNavigate } from 'react-router-dom';
// component imports
import { Text, Image, Button, Spacer, Textarea, Card, Divider } from '@geist-ui/react';
import dronutLogoImg from '../images/dronut.png';
import './LoginPageStyle.css'


function LoginPage() {

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
                <form>
                    <Spacer h={0.5} />
                    <Text h4 style={{marginRight: '50%', fontWeight: 'inherit', margin: 0}}>Username</Text>
                    <input type="text" id="uname" name="username" placeholder="Usename"></input>
                    {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
                    <Spacer h={2} />
                    <Text h4 style={{marginRight: '50%', fontWeight: 'inherit', margin: 0}}>Password</Text>
                    <input type="text" id="pass" name="password" placeholder="Password"></input>
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
