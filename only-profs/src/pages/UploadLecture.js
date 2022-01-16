import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Upload, message, Button as AntButton } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import * as APIFirebase from "../back-end/functions";
import './UploadLecture.css';
import Cookies from 'js-cookie';

export default function UploadLecture() {
  
  const [formParams, setFormParams] = React.useState({
    title: "",
    description: "",
    video: {},
    video_title: "",
    assignments: {}
  });

  const onHandleChange = (e, field) => {
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
        setFormParams({...formParams,
          video: e.target.value,
        });
        break;
      case "assignments":
        setFormParams({...formParams,
          assignments: e.target.value,
        });
        break;
    }
  }

  const handleSubmit = async (e) => {
    const uid = Cookies.get("session");
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

