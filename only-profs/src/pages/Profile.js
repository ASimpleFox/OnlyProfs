import React from 'react'
import VideoCard from '../components/VideoCard';
import './Profile.css';
import {useEffect} from 'react';
import * as APIFirebase from "../back-end/functions";

function Profile(props) {
    const [userProfile, setUserProfile] = React.useState("")

    useEffect(async () => {
        console.log(props)
        const video_response = await APIFirebase.getProfessorInfo(props.uid);
        console.log("handle");
        console.log(video_response);
        if (!video_response) {
          console.log("Get Info Failed");
        } else {
        }
        setUserProfile(video_response);
    }, [])
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
    )
}

export default Profile
