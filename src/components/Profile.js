import React from 'react';
import './UserProfileCard.css'; // Make sure to create this CSS file

function UserProfileCard(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.user.imageUrl} alt={props.user.name} />
      </div>
      <div className="card-info">
        <h2>{props.user.name}</h2>
        <p>{props.user.position}</p>
        <p>{props.user.email}</p>
      </div>
    </div>
  );
}

export default UserProfileCard;