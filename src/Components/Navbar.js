import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <nav className='Navbar'>
        <div className='Navbar__left'>
          <Link to='/'>
            <h3 className='Navbar__logo' style={{ textDecoration: 'none' }}>
              reLearn
            </h3>
          </Link>
        </div>
        <div className='Navbar__right'>
          <Link to='/'>
            <DashboardIcon
              className='Navbar__dashboard'
              style={{ color: '#fffff' }}
            />
          </Link>
          <Link to='/Friends'>
            <GroupIcon className='Navbar__group' />
          </Link>
          <Link to='/profile'>
            <AccountBoxIcon className='Navbar__account' />
          </Link>
          <Link to='/notifications'>
            <NotificationsActiveIcon className='Navbar__notification' />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
