import {React, Component} from 'react';
import MainPage from '../pages/MainPage';
import SearchPage from '../pages/SearchPage';
import LoginPage from '../pages/LoginPage';
import UploadLecture from '../pages/UploadLecture';
import './ProfHeader.css';
import logo from './logo.png';
import {Avatar} from '@material-ui/core';

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
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/search">Search</Link>
                    <Link className="link" to="/login">Login</Link>
                    <Link className="link" to="/Upload">Upload</Link>
                    <Avatar>H</Avatar>
                </div>
                <div className="content">
                <Routes>
                    <Route exact path="/" element={<MainPage/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                    <Route path="/Upload" element={<UploadLecture/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
                </div>
            </Router>
        </div>
    )
}

export default ProfHeader
