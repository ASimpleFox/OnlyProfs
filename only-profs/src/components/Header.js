import React from 'react';
import MainPage from '../pages/MainPage';
import SearchPage from '../pages/SearchPage';
import './Header.css';
import {Avatar} from '@material-ui/core';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  

function Header() {
    return (
        <div>
            <div className="header">
                <Router >
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/search">Search</Link>
                    <Link className="link" to="/notifications">Notifications</Link>
                    <Link className="link" to="/bookmarks">Bookmarks</Link>
            <div className = "container">
                <Routes>
                    <Route exact path="/" element={<MainPage/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                </Routes>
            </div>
                    
                </Router>

            </div>
        </div>
    
        
    )
}


export default Header
