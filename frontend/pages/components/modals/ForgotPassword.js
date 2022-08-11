import React from 'react';
import { Modal, Select, SelectItem, Button, ButtonSet, Link, AspectRatio, TextInput, FormGroup, Grid, Row, Column  } from "carbon-components-react";

class ForgotPassword extends React.Component{

    constructor(props)
    {
        super(props);

        this.state = {
            email: ""
        }
    }

      setUsername(uname){
            this.setState({
                email: uname
            })
      }
    
    render(){
        return <div>
            <Modal modalHeading="Forgot Password"
            primaryButtonText="Submit"
            secondaryButtonText="Cancel"
            open={open}
            onRequestClose={() => this.props.handleCloseForget()}>

            {/* onHide={props.handleClose()}> */}
            <TextInput id="one" required labelText="Email" style={{ marginBottom: '1rem' }} value={this.state.email} onChange={e => { this.setUsername(e.currentTarget.value);}} />
            
    </Modal></div>
    }

}

export default  ForgotPassword;