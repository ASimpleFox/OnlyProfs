import React from 'react'
import thumbnail from './thumbnail.jpg';
import './VideoCard.css';
function VideoCard() {
    return (
        <div className="video-card">
            <img className="thumbnail" src={thumbnail}></img>
            <div className="video-card-content">
                <h3>Title</h3>
                <p>Uploaded by</p>
                <p>Description</p>
                <p>Includes</p>
            </div>
        </div>
    )
}

export default VideoCard
