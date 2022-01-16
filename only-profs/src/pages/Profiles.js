import React from 'react'
import Profile from './Profile'

function Profiles() {
    return (
        <div>
            <Profile props={this.props.match.params.uid}/>
        </div>
    )
}

export default Profiles
