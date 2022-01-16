import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Upload, message, Button as AntButton } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import * as APIFirebase from "../back-end/functions";
import './UploadLecture.css';
import Cookies from 'js-cookie';

export default function UploadLecture() {

  // const props = {
  //   name: 'file',
  //   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  //   headers: {
  //     authorization: 'authorization-text',
  //   },
  //   onChange(info) {
  //     if (info.file.status !== 'uploading') {
  //       console.log("info file ", info.file, info.fileList);
  //     }
  //     if (info.file.status === 'done') {
  //       message.success(`${info.file.name} file uploaded successfully`);
  //     } else if (info.file.status === 'error') {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  // };
  
  const [formParams, setFormParams] = React.useState({
    title: "",
    description: "",
    video: {},
    video_title: "",
    assignments: {}
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
      case "video":
        console.log("video", e.target.files[0])
        setFormParams({...formParams,
          video: e.target.value,
        });
        break;
      case "assignments":
        console.log("assignments", e.target.files[0])
        setFormParams({...formParams,
          assignments: e.target.value,
        });
        break;
    }
  }

  const handleSubmit = async (e) => {
    console.log(document.cookie)

    const uid = Cookies.get("session");
    console.log(Cookies.get("session"));
    e.preventDefault();

    const video_response = await APIFirebase.uploadVideo(
      uid,
      VideoFile,
      formParams.title,
      formParams.description
    );

    const assignment_response = await APIFirebase.uploadAssignment(
      uid,
      AssignmentFile,
      formParams.title,
      formParams.description
    );

    console.log(formParams);
    if (video_response === "Error") {
      console.log("Video Upload Failed");
    } else {
      console.log("Video Upload Successful");
    }

    if (assignment_response === "Error") {
      console.log("Assignment Upload Failed");
    } else {
      console.log("Assignment Upload Successful");
    }
  };

  const [VideoFile, setVideoFile] = React.useState("");
  const handleSelectVideoFile = (e) => {
    const image = e.target.files[0];
    setVideoFile((imageFile) => image);
  };

  const [AssignmentFile, setAssignmentFile] = React.useState("");
  const handleSelectAssignmentFile = (e) => {
    const image = e.target.files[0];
    setAssignmentFile((imageFile) => image);
  };

  return (
    <div>
      <p>{formParams.description}</p>
      <form className="upload-lecture-container" onSubmit={handleSubmit}>
        <h1>Upload Lecture</h1>
        <TextField
          onChange={(e) => onHandleChange(e, "title")}
          id="outlined-basic"
          label="Lecture Title"
          variant="outlined"
        />
        <TextField
          onChange={(e) => onHandleChange(e, "description")}
          id="outlined-basic"
          label="Lecture Description"
          variant="outlined"
        />

        <p>Video</p>
        <input
          onChange={handleSelectVideoFile}
          type="file"
          accept=".mp4, .mov"
        />
        <p>Assignment</p>
        <input
          onChange={handleSelectAssignmentFile}
          type="file"
          accept=".pdf, .docx"
        />

        <Button variant="contained" className="button" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

