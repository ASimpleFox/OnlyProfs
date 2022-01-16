import React from 'react'
import triangles_people from './triangles-people.png';
import './MainPage.css';

function MainPage() {
    return (
        <div className="main-container">
            <div className="top-container">
                <p className="emphasized-text">Master any topic with the help of knowledgeable instructors</p>
                <img src={triangles_people} alt="triangle_people" className="triangle_people"></img>
            </div>
        </div>
    )
}

export default MainPage
