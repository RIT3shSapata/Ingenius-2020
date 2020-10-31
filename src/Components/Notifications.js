import React from 'react';
import NotificationCard from './NotificationCard';
import './Notifications.css';

function Notifications() {
  return (
    <div className='Notifications'>
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
    </div>
  );
}

export default Notifications;
