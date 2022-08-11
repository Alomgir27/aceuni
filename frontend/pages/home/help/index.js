import React from 'react';
import {useState} from 'react'
import {UserAvatarFilledAlt32} from '@carbon/icons-react'
import {Form, TextArea, Button} from "carbon-components-react";
import Layout from '../../components/layout/Layout';
import axios from 'axios';

const divStyle = {
    marginTop: '15px'
  };

const Help = () => {
  const [feedback, setfeedback] =useState("");

  const sendFeedback = async (e) => {
    e.preventDefault();
    console.log("I'm sending feedback")
    if (feedback === ""){
      alert("feedback cannot be empty")
    }
    else{
    axios.post('http://localhost:8080/api/Authentication/feedback',{
      "feedback": feedback,
      }).then((res)=>{
        console.log(res)
        alert("feedback submitted")
        setfeedback("")
        
      }).catch((err) => {
          console.log(err);
      });
    }
  }

return (<Layout><div className="bx--grid">
    <div className="bx--row"  style={divStyle}>
    <h2 style={divStyle}>Our Mission</h2>
    </div>
    <div className="bx--row " style={divStyle}>
        <div className="bx--col" style={divStyle}>
        <p>
        Provide helping material to students. The final year honors project for the Carleton. This is submitted unders the supervision of professor Lou Nel. 
        Sit amet est placerat in egestas erat. Senectus et netus et malesuada fames ac turpis. Non odio euismod lacinia at
        quis. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Quam pellentesque nec nam aliquam
        sem. Tortor at auctor urna nunc id cursus metus aliquam. Fames ac turpis egestas maecenas. Auctor urna nunc id
        cursus metus aliquam eleifend. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Dolor morbi non
        arcu risus quis varius quam quisque id. Eget velit aliquet sagittis id consectetur. Tortor vitae purus faucibus
        ornare suspendisse sed nisi lacus sed. Convallis aenean et tortor at risus viverra adipiscing at in.
        </p>
        </div>
        </div>
    <div className="bx--row" style={divStyle}>
        <h2 style={divStyle}>Our Team</h2>
    </div>
    
    <div className="bx--row" style={divStyle}>
        

        <div className="bx--col">
        <UserAvatarFilledAlt32 style={divStyle}/>
        <h4 style={divStyle}>Name Hofostra</h4>
        <h4>Email: hello@mail.com</h4>
        </div>
        <div className="bx--col">
        <UserAvatarFilledAlt32 style={divStyle}/>
        <h4 style={divStyle}>Name xyz</h4>
        <h4>Email: xyz@mail.com</h4>
        </div>
        <div className="bx--col">
        <UserAvatarFilledAlt32 style={divStyle}/>
        <h4 style={divStyle}>Name pqr</h4>
        <h4>Email: pqr@mailer.com</h4>
        </div>
    </div>

    <div className="bx--row" style={{marginTop:"25px"}}>
        <h2>We would to hear back from you</h2>
        
    </div>
    <div className="bx--row" style={divStyle}>
        <Form id="feed-form">
            <TextArea labelText="Feedback"  value={feedback} onChange={(e)=> { setfeedback(e.target.value)}} placeholder='Start Writing...'/>
          <Button type="submit" className="some-class" onClick={(e) => {sendFeedback(e)}} style={divStyle}>
            Send
          </Button>
        </Form>
    </div>

 {/* here i'm going to map the results */}
</div></Layout>)};

export default  Help;

