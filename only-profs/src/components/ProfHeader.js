import {React, Component} from 'react';
import MainPage from '../pages/MainPage';
import SearchPage from '../pages/SearchPage';
import './ProfHeader.css';
import logo from './logo.png';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import EditCourse from '../pages/EditCourse';
  

function ProfHeader() {
    return (
        <div className="container">
            <Router >
                <div className="header">
                    <img className="logo"src={logo} alt="Logo" />
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/search">Search</Link>
                    <Link className="link" to="/notifications">Notifications</Link>
                    <Link className="link" to="/Upload">Upload</Link>
                </div>
                <div className="content">
                <Routes>
                    <Route exact path="/" element={<MainPage/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                    <Route path="/Upload" element={<EditCourse/>}/>
                </Routes>
                </div>
            </Router>
        </div>
    )
}

export default ProfHeader
