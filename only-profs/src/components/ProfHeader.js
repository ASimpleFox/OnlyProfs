import {React, Component} from 'react';
import MainPage from '../pages/MainPage/MainPage';
import SearchPage from '../pages/SearchPage';
import LoginPage from '../pages/LoginPage';
import UploadLecture from '../pages/UploadLecture';
import './ProfHeader.css';
import logo from './logo.png';
import {Avatar} from '@material-ui/core';
import Profile from '../pages/Profile';
import SignUpPage from '../pages/SignUpPage';
import Profiles from '../pages/Profiles';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  

function ProfHeader() {
    return (
        <div className="container">
            <Router >
                <div className="header">
                    <img className="logo"src={logo} alt="Logo" />
                    <div className="links">
                        <Link className="link" to="/">Home</Link>
                        <Link className="link" to="/search">Search</Link>
                        <Link className="link" to="/login">Login</Link>
                        <Link className="link" to="/Upload">Upload</Link>
                        <Link className="link" to="/Profile">Profile</Link>
                    <Avatar>H</Avatar>
                    </div>
                </div>
                <div className="content">
                <Routes>
                    <Route exact path="/" element={<MainPage/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                    <Route path="/Upload" element={<UploadLecture/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/SignUp" element={<SignUpPage/>}/>
                    <Route path="/Profiles" element={<Profiles/>}/>
                </Routes>
                </div>
            </Router>
        </div>
    )
}

export default ProfHeader
