import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Upload, message, Button as AntButton } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import * as APIFirebase from "../back-end/functions";
import "./UploadLecture.css";
import Cookies from "js-cookie";
import "./SearchPage.css";
import { useNavigate, useParams } from "react-router-dom";

export default function UploadLecture() {
  const [formParams, setFormParams] = React.useState("");
  const [userProfile, setUserProfile] = React.useState("");
  const navigate = useNavigate();

  const onHandleChange = (e) => {
    setFormParams(e.target.value);
  };

  const handleSubmit = async (e) => {
    const video_response = await APIFirebase.getProfessorInfo(formParams);
    console.log("handle", video_response);
    if (!video_response) {
      console.log("Get Info Failed");
    } else {
     }
    setUserProfile(video_response);
    console.log(userProfile);
  };

  const redirect = (uid) => {
    console.log("redirecting uid ", uid, userProfile.username)
    navigate("/Profiles", {state: {profile: userProfile}});
  }

  return (
    <div className="search-container">
      <h1>Search Professors</h1>
      <div className="search-bar">
        <TextField
            onChange={(e) => onHandleChange(e)}
            id="outlined-basic"
            label="Lecture Title"
            variant="outlined"
            size="small"
        />
        <Button
            onClick={(e) => handleSubmit(e)}
            variant="contained"
            className="button"
        >
            Search
        </Button> 
      </div>
      <h2 className="padding">Results</h2>
      <div onClick={() => {redirect(userProfile.uid)}} className="search-results">
          <h2 className="profile-content">{userProfile.username}</h2>
          <h3 className="profile-content">{userProfile.title}</h3>
          <p className="profile-content">{userProfile.description}</p>
      </div>
    </div>
  );
}
/*
description: "Ima Koopa Troopa"
email: "koopertrooper@gmail.com"
title: "Dr."
username: "Koopa"
*/