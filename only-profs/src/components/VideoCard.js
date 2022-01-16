import React from 'react'
import thumbnail from './thumbnail.jpg';
import './VideoCard.css';
function VideoCard() {
    return (
        <div className="video-card">
            <img className="thumbnail" src={thumbnail}></img>
            <div className="video-card-content">
                <h3 className="video-info">Title</h3>
                <p className="video-info">Uploaded by</p>
                <p className="video-info">Description</p>
                <p className="video-info">Includes 2 assignments</p>
            </div>
        </div>
    )
}

export default VideoCard
