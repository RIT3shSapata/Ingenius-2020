import React, { useState } from 'react';
import './Profile.css';
import { Line, Circle } from 'rc-progress';
import ProfileCard from './ProfileCard';

function Profile() {
  return (
    <div className='Profile'>
      <div className='Profile__top'>
        <div className='Profile__left'>
          <img
            className='Profile__picture'
            src='https://preview.redd.it/7fcu41hi2re41.png?auto=webp&s=038dc69c1622eb809ebbfbc15c22c5f6739dca65'
          />
        </div>
        <div className='Profile__right'>
          <h1>DumbTurtl3</h1>
          <h2>You need 40XP to level up</h2>
          <Line
            percent={69}
            strokeWidth='3'
            strokeColor='#6dd94a'
            trailColor='#e0e334'
            trailWidth='2'
          />
          <div className='Profile__skills'>
            <h3>Skills:</h3>
            <h4>Python</h4>
            <h4>JavaScript</h4>
            <h4>HTML</h4>
          </div>
        </div>
      </div>
      <div className='Profile__bottom'>
        <h1 className='Profile__achievementsTitle'>Achievements</h1>
        <div className='Profile__achievements'>
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}

export default Profile;
