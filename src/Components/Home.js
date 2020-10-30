import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <section className='hero'>
      <div className='lander'>
        <h1 id='header'>reLearn</h1>
        <br />
        <br />
        <br />
        <br />
        <div className='typewrite'>
          <span className='typewrite-text'>Learn.</span>
          <span className='typewrite-text'> Connect. </span>
          <span className='typewrite-text'>Grow</span>
        </div>

        <br />
        <br />
        <hr className='gradient_line' />
      </div>
      <div id='user'>
        <Link to='/login'>
          <button type='button login-button' id='button1'>
            Login
          </button>
        </Link>
        <Link to='/signup'>
          <button type='button signup-button' id='button2'>
            Sign Up
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
