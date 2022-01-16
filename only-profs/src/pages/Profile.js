import React from 'react'
import VideoCard from '../components/VideoCard';

function Profile() {
    return (
        <div>
            <div>
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
