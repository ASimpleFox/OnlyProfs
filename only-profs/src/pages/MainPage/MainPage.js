import React from 'react'
import triangles_people from './triangles-people.png';
import './MainPage.css';

function MainPage() {
    return (
        <div className="main-container">
            <div className="top-container">
                <p className="emphasized-text">Master any topic with the help of knowledgeable instructors</p>
                <img src={triangles_people} alt="triangle_people" className="triangle-people"></img>
            </div>
            <div className="watch-lectures">
                <p className="emphasized-text">Watch lectures and review resources given by credible instructors.</p>
            </div> className="regular-text">Recorded lectures, relevant readings, worksheets, tests, and more provided 
                by an instructor of your choosing can easily be accessed just by searching up a topic. </p>
                <button className="button">Begin Your Search</button>
        </div>
    )
}

export default MainPage
