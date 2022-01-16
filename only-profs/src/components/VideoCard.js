import React from 'react'
import thumbnail from './thumbnail.jpg';
import './VideoCard.css';
function VideoCard() {
    const watchVideo = () => {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    }

    return (
        <div onClick={() => watchVideo()} className="video-card">
            <img className="thumbnail" src={thumbnail}></img>
            <div className="video-card-content">
                <h3 className="video-info">Title</h3>
                <p className="video-info">Description</p>
            </div>
        </div>
    )
}

export default VideoCard
