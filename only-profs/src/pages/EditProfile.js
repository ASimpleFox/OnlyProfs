import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Upload, message, Button as AntButton } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './UploadLecture.css';

export default function EditProfile() {

 
  const [formParams, setFormParams] = React.useState({
    title: "",
    description: "",
    course_id: ""
  });

  const onHandleChange = (e, field) => {
    console.log(e)
    switch(field) {
      case "name":
        setFormParams({...formParams,
          title: e.target.value,
        });
        break;
      case "bio":
        setFormParams({...formParams,
          description: e.target.value,
        });
        break;
      case "profession":
        setFormParams({...formParams,
          course_id: e.target.value,
        });
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formParams);
  }

  return (
    <div >
      <p>{formParams.description}</p>
      <form className="upload-lecture-container" onSubmit={handleSubmit}>
        <h1>Upload Lecture</h1>
        <TextField onChange={(e) => onHandleChange(e, "title")} id="outlined-basic" label="Name" variant="outlined" />
        <TextField onChange={(e) => onHandleChange(e, "description")} multiline id="outlined-basic" label="Biography" variant="outlined"/>
        <TextField onChange={(e) => onHandleChange(e, "course-id")} id="outlined-basic" label="Course ID" variant="outlined"/>
        <Upload {...props}>
          <AntButton icon={<UploadOutlined />}>Upload Video</AntButton>
          <AntButton icon={<UploadOutlined />}>Upload Assignments</AntButton>
        </Upload>
        <Button variant="contained" className="button" type="submit">Submit</Button>
      </form>
    </div>
  );
}
