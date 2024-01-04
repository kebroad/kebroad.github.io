import React from 'react'
import './Profile.css'

const Profile = ({portrait, description}) => {
  return (
    <div className="profile">
      <div className="description">
        {description}
      </div>
      <img className="portrait" src={portrait}></img>
    </div>  
  )
}

export default Profile