import React from 'react';
import MainPage from '../pages/MainPage';
import SearchPage from '../pages/SearchPage';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  

function Header() {
    return (
        <div>
            <Router>
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/notifications">Notifications</Link>
                <Link to="/bookmarks">Bookmarks</Link>
                <Routes>
                    <Route exact path="/" element={<MainPage/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default Header
