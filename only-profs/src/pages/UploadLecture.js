import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Upload, message, Button as AntButton } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './UploadLecture.css';

export default function UploadLecture() {

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  
  const [formParams, setFormParams] = React.useState({
    title: "",
    description: "",
    course_id: ""
  });

  const onHandleChange = (e, field) => {
    console.log(e)
    switch(field) {
      case "title":
        setFormParams({...formParams,
          title: e.target.value,
        });
        break;
      case "description":
        setFormParams({...formParams,
          description: e.target.value,
        });
        break;
      case "course-id":
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
        <TextField onChange={(e) => onHandleChange(e, "title")} id="outlined-basic" label="Lecture Title" variant="outlined" />
        <TextField onChange={(e) => onHandleChange(e, "description")} id="outlined-basic" label="Lecture Description" variant="outlined"/>
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
