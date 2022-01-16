import React from 'react'
import Profile from './Profile'
import {useLocation} from 'react-router-dom';


function Profiles() {

    const location = useLocation();
    console.log(location);
    return (
        <div>
            <Profile props={location.uid}/>
        </div>
    )
}

export default Profiles
