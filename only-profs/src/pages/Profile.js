import React from 'react'
import VideoCard from '../components/VideoCard';
import './Profile.css';

function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-info">
                <h1>Name</h1>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
                <h1>Lectures</h1>
                <VideoCard></VideoCard>
            </div>
        </div>
    )
}

export default Profile
