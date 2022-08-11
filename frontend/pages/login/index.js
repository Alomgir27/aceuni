import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image'
import axios from 'axios'
import { withRouter } from 'next/router';
import { ButtonSet, AspectRatio, TextInput, FormGroup, Button, Grid, Row, Column  } from "carbon-components-react";
import { Education32, ArrowRight16 } from '@carbon/icons-react';
import Signup from '../components/modals/SignUp';
import ForgotPassword from '../components/modals/ForgotPassword'
import { useAuth } from '../contexts/auth';


var SHA256 = require("crypto-js/sha256");

export const sendPasswordHash = (password) => {
    var hash = SHA256(password)
    var x = ""
    for (let i in hash['words'])
        x+=hash['words'][i]
    return x
}


function Login(){

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [title, setTitle] = useState("");
    const [showModalSignup, SetShowModalSignup] = useState(false);
    const [showModalForget, setShowModalForget] = useState(false);
    const { user , login } = useAuth();



    // constructor(props)
    // {
    //     super(props);

    //     this.handleShowSignup = this.handleShowSignup.bind(this);
    //     this.handleCloseSignup = this.handleCloseSignup.bind(this);

    //     this.handleShowForget = this.handleShowForget.bind(this);
    //     this.handleCloseForget = this.handleCloseForget.bind(this);

    //     this.state = {
    //         username: "",
    //         password: "",
    //         showModalSignup: false,
    //         showModalForget: false,
    //         title: "Hello"
    //     }
    // }
    
    const handleCloseSignup = () => {
        SetShowModalSignup(false);
        // this.setState({ showModalSignup: false});
      }
      
     const handleShowSignup = () => {
        SetShowModalSignup(true);
        // this.setState({ showModalSignup: true });
      }

     const handleCloseForget = () =>{
         setShowModalForget(false);
        // this.setState({ showModalForget: false});
      }
      
      const handleShowForget = () => {
          setShowModalForget(true);
        // this.setState({ showModalForget: true });
      }

      const handleLogin = (e) => {
        // e.preventDefault();
        if(username === "" || password === ""){
            alert("Credentials cannot be empty")
        }
        else{
            axios.post('http://localhost:8080/api/Authentication/login',{
                "username": username,
                "password": sendPasswordHash(password),
            })
            .then(response => { 
                console.log(response);
                login(response);                
                // router.push('/home')

            }).catch((err) => {
                console.log(err)
                alert("Wrong Password, Try forgot password");
            })
        }
      }

     const setPassword = (pwd) => {
         setpassword(pwd);
        // this.setState({
        //     password: pwd
        // })
      }

      const setUsername = (uname) =>{
          setusername(uname);
            // this.setState({
            //     username: uname
            // })
      }
    
    // render()
        return <Grid fullWidth style={{ 
            // backgroundImage:  "url(login_img.png)" 
          }}>
            <Head  >
                <title>ACEUNI!</title>
            </Head>
        
            
            <Row  style={{ margin: '2rem 2rem 2% 30%', whiteSpace: 'nowrap', borderTopWidth: '0px'}} >
                <h1 style={{textAlign: 'center'}}>
                <Education32 /> Welcome to the <a href="https://github.com/parklicoste/aceuni/" target="_blank">ACEUNI!</a> <Education32 />
                </h1>
            </Row>
            <Row style={{ margin: '0 0 0 0', whiteSpace: '', borderTopWidth: '0px', height: '450px' }}>
                <Column md={4} style={{ margin: '2rem 0 0 0'}}>
                        <h2 style={{ margin: '0 0 1rem 42%' }} >About</h2>
                    <AspectRatio ratio="1x1"  >
                        <p style={{ padding: '2rem 5rem 0 5rem'}}>Hello My name is adffrfs, <br></br>Thank You. </p>
                    
                    </AspectRatio>
                </Column>

                <Column md={4} style={{ margin: '2rem 0rem 0 0', alignItems: 'left'}}>
                    <AspectRatio ratio="1x1">
                        <h2 style={{ margin: '0 0 1rem 30%' }}> Sign In</h2>
                        <FormGroup legendId="formgroup-legend-id"
  legendText="" className='test' style={{ maxWidth: '75%', padding: '20px 20px 0px 100px' }}>

                            <TextInput id="one" labelText="Email" style={{ marginBottom: '1rem' }} value={username} onChange={e => { setUsername(e.currentTarget.value); }} />
                            
                            <TextInput type="password" id="two" labelText="Password" requiredpattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" style={{ marginBottom: '1rem' }} value={password} onChange={e => { setPassword(e.currentTarget.value); }}
/>
                            <Button style={{ margin: '0.5rem 100px', width: '100%', maxWidth: '12.25rem' }} isExpressive renderIcon={ArrowRight16} hasIconOnly iconDescription="Arrow right" kind="primary" onClick={(e)=>handleLogin(e) }>Login</Button>
                        </FormGroup>
                        <ButtonSet style={{padding: '10px 20px 0px 100px'}}>

                            <Button style={{margin: '0 5px 5px 1px'}} kind="secondary" onClick={()=>handleShowForget()}>Forgot Password?</Button>

                            <Button style={{margin: '0 15px 5px 15px'}}kind="ghost" onClick={()=>handleShowSignup()}>Don't have an account? Sign up!</Button>

                            {showModalSignup ? <Signup handleCloseSignup={handleCloseSignup} passwordHash={sendPasswordHash}/> : null}

                            {showModalForget ? <ForgotPassword handleCloseForget={handleCloseForget} /> : null}
                            
                        </ButtonSet>
                    </AspectRatio>    
                </Column>
            </Row>
            <Row style={{ margin: '0 10% 0 10%', whiteSpace: 'nowrap', borderTopWidth: '0px' }}>
                <Image src={`/img/login.png`} alt="logo" width={1200} height={400} /> 
            </Row>

            <Row style={{ margin: '2rem 2rem 5% 30%', whiteSpace: 'nowrap', borderTopWidth: '0px' }} >
                <h6 style={{textAlign: 'center'}}>
                    Copyright@  <br></br>
                   
                </h6>
            </Row>
            
        </Grid>
}

export default  withRouter(Login);