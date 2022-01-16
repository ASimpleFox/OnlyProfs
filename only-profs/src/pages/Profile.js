import React from 'react'
import VideoCard from '../components/VideoCard';
import './Profile.css';

function Profile() {
    return (
        <div className="profile-container">
            <div className="prof-info">
                <h1>Name</h1>
                <h2>Title</h2>
                <p>Bio</p>
            </div>
            <div>
                <h1>Lectures</h1>
                <VideoCard></VideoCard>
            </div>
        </div>
    )
}

export default Profile
