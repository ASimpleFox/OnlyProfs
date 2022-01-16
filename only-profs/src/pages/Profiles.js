import React from 'react'
import Profile from './Profile'
import {useLocation} from 'react-router-dom';


function Profiles() {

    const location = useLocation();
    console.log("location ", location.state);
    return (
        <div>
            <Profile profile={location.state.profile}/>
        </div>
    )
}

export default Profiles
