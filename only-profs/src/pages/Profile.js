import React from 'react'

function Profile() {
    return (
        <div>
            <h1>Jake Paul</h1>
            <Typography component="legend">Read only</Typography>
            <Rating name="read-only" value={value} readOnly />
        </div>
    )
}

export default Profile
