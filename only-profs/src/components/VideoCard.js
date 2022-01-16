import React from 'react'
import thumbnail from './thumbnail.jpg';
import './VideoCard.css';
import {useEffect} from 'react';
function VideoCard(props) {

    useEffect(() => {
        console.log("useEffect videocard", props.video["Test File"]);
    }, []);

    const watchVideo = () => {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    }

    return (
        <div onClick={() => watchVideo()} className="video-card">
            {/* <img className="thumbnail" src={thumbnail}></img> */}
            <video className="thumbnail" src={props.video.videoURL}></video>
            <div className="video-card-content">
                <h3 className="video-info">{props.video.videoName}</h3>
                <p className="video-info">{props.video.videoDescription}</p>
            </div>
        </div>
    )
}

export default VideoCard
