import React from 'react'
import './Profile.css'
import Card from '../../UI/Card/Card'
const Profile = ({portrait, description}) => {
  return (
  <Card>
    <div className="profile">
      <div className="description-container">
        <p className="description">
          {description}
        </p>
      </div>
      <img className="portrait" src={portrait}></img>
    </div>  
  </Card>
  )
}

export default Profile