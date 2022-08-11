import React from 'react';
import {useState} from 'react'
import { Button, Row, Select, Form, TextInput, SelectItem, TextArea, FileUploader } from "carbon-components-react";
import Layout from '../../components/layout/Layout';
import axios from 'axios';

const divStyle = {
    margin: '10px 0 20px 0'
  };

//   const args = (args) => require('./stories/drop-container').default(args)

  


  const Upload = (args) => {
    const [title, setTitle] =useState("");
    const [code, setCode] =useState("");
    const [university, setUni] =useState("");
    const [description, setDesc] =useState("");
    const [file, setFile] = useState([]);

    const onFormData = async (e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append('file', file);
      formData.append('title', title);
      formData.append('code', code);
      formData.append('university', university);
      formData.append('description', description);
      console.log(formData.get('file'))
      const data = {
        title : title,
        code : code,
        university : university,
        description : description,
      }
      // formData.append('document', JSON.stringify(data));
      const config = {
      headers: {
        'content-type' : 'multipart/form-data',
      },
      }
    const url = 'http://localhost:8080/api/Authentication/upload'
     await axios.post(url, formData, config)
      .then((res) => {
        console.log(res);
        alert('Success')
      })
      .catch((err) => {
        console.log('err' , err);
        alert('Error')
      })
      // const urldoc = 'http://localhost:8080/api/Authentication/upload'
      // await axios.post(urldoc, data)
      // .then((res) => {
      //   console.log(res);
      // })
      // .catch((err) => {
      //   console.log('err' , err);
      // })
    }



    return (<>
    <Layout>
      <div className="bx--grid" >
        <div className="bx--row"  style={divStyle}>
        <Row><h2>Upload Material</h2></Row>
        </div>

        <div className="bx--row" >
        <form action="">
        <TextInput id="course-name" type="name" required labelText="Course Title" onChange={(e)=> { setTitle(e.target.value)}}/>

        <TextInput id="course-code" type="name" required labelText="Course Code" onChange={(e)=> { setCode(e.target.value)}}/>

        <Select style={divStyle} id="select-1" defaultValue="placeholder-item" labelText="University" helperText="" onChange={(e)=> { setUni(e.target.value)}}>
        <SelectItem disabled hidden value="placeholder-item" text="Choose an option" />
          <SelectItem value="Carleton University" text="Carleton University" />
          <SelectItem value="UOttawa" text="UOttawa" />
          <SelectItem value="Algonquin College" text="Algonquin College" />
          <SelectItem value="Other" text="Other" />
      </Select>

      <TextArea labelText="Course Description" placeholder='Start Writing...' onChange={(e)=> { setDesc(e.target.value)}}/>

      <FileUploader style={divStyle} accept={['.jpg','.png', '.pdf']} buttonKind="primary" buttonLabel="Add files" filenameStatus="edit"
          iconDescription="Clear file" labelDescription=".jpg .pdf files at 500mb or less" labelTitle="Upload" onChange={(e) => setFile(e.target.files[0]) }/>

      <Button type='submit' onClick={onFormData} className="some-class"  style={{marginTop: "15px"}}>
        Submit
      </Button>

      </form>
      </div>

{/* here i'm going to map the results */}
</div></Layout>
</>
)}
export default Upload