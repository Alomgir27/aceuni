import React from 'react';
import {useState} from 'react'
import { Button, Row, Form, TextInput } from "carbon-components-react";
import Layout from '../../components/layout/Layout';
import { sendPasswordHash } from '../../login';

const divStyle = {
    margin: '10px 0 20px 0'
  };


const Settings = () => {
  const [currPwd, setCurrPwd] =useState("");
  const [newPwd, setNewPwd] =useState("");
  const [confNewPwd, setConfNewPwd] =useState("");
  const [invalidPass, setInvalid] =useState(false);

  const checkPassword = async (e) => {
    if(currPwd !== confNewPwd || confNewPwd === ""){
      setInvalid(true)
    }
  }

  const updatePassword = async (e) => {
    e.preventDefault();
    if (currPwd !== "admin"){ // this.user.password
      alert("Current password doesn't match")
    }
    else if(!invalidPass){
      axios.post('http://localhost:8080/api/authentication/user/password',{
        "password": newPwd,

        }).then((res)=>{
          console.log(res)
        }).catch((err) => {
            console.log(err);
        });
      }
  }

  return (<Layout><div className="bx--grid" style={divStyle}>
<div className="bx--row"  style={divStyle}>
<Row><h2>Settings</h2></Row>
</div>

<div className="bx--row" style={divStyle}>
<Row><h4>Change Password</h4></Row></div>

<div className="bx--row" ><Form>

        <TextInput
          onChange={(e)=> { setCurrPwd(sendPasswordHash(e.target.value))}}
            type="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            labelText="Current Password"
        />

        <TextInput
            onChange={(e)=> { setNewPwd(sendPasswordHash(e.target.value))}}
            type="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            labelText="New Password"
        />

        <TextInput
            onChange={(e)=> { setConfNewPwd(sendPasswordHash(e.target.value))}}
            type="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            labelText="Confirm New Password"

            invalidText={invalidPass ? "Passwords do not match or The Password provided is empty": null }
        />
      
      <Button type="submit" className="some-class"  style={{marginTop: "15px"}} onClick={(e) => {updatePassword}} >
        Change Password
      </Button>
    </Form></div>

{/* here i'm going to map the results */}
</div></Layout>)}

            
            
        
// Settings.Layout = DefaultLayout;

export default Settings;