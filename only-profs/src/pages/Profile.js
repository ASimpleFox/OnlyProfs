import React from "react";
import VideoCard from "../components/VideoCard";
import "./Profile.css";
import { useEffect } from "react";
import * as APIFirebase from "../back-end/functions";

function Profile(props) {
  const [userProfile, setUserProfile] = React.useState("");

  useEffect(async () => {
    console.log("useEffect", props.profile);
    if (props.profile) {
        setUserProfile(props.profile)
    } else {
        const profile = await APIFirebase.getProfessorInfoByUID(props.uid);
        setUserProfile(profile);
    }
    
    console.log(userProfile)
  }, []);
  return (
    <div className="profile-container">
      <div className="profile-info">
        <h1>{userProfile.username}</h1>
        <h2>{userProfile.title}</h2>
        <p>{userProfile.description}</p>
      </div>
      <div>
        <h1>Lectures</h1>
        <VideoCard></VideoCard>
      </div>
    </div>
  );
}

export default Profile;
