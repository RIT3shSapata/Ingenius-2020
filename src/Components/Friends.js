import React from 'react';
import FriendCard from './FriendCard';
import './Friends.css';

function Friends() {
  return (
    <div className='Friends'>
      <FriendCard number={1} />
      <FriendCard number={2} />
      <FriendCard number={3} />
      <FriendCard number={4} />
      <FriendCard number={5} />
      <FriendCard number={6} />
      <FriendCard number={7} />
      <FriendCard number={8} />
    </div>
  );
}

export default Friends;
