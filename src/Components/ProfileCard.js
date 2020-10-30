import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import './ProfileCard.css';

function ProfileCard() {
  return (
    <div className='ProfileCard'>
      <div className='ProfileCard__logo'>
        <StarIcon></StarIcon>
      </div>
      <h3 className='ProfileCard__title'>Achievement</h3>
      <h2 className='ProfileCard__description'>Lorem Ipsum</h2>
    </div>
  );
}

export default ProfileCard;
