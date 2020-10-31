import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import web from '../img/web.jpg'

function Signup() {
  return (
    <div className='Signup'>
      <div className='side'>
      <Link to='/Home'>
        <h1 id='header'>reLEARN</h1>
      </Link>
        <p id='text'>The Social Network for Learning!</p>
      </div>
      
      <div className='vl'></div>
      <div class='account' style={{ position: 'relative', right: '35%' }}>
        <form className='signup' onsubmit='return false' autocomplete='off'>
          <h1>Create account</h1>
          <h2>
            Already have an account? <span>Sign in</span>
          </h2>

          <div className='signup__field'>
            <input
              className='signup__input'
              type='text'
              name='username'
              id='username'
              required
            />
            <label className='signup__label' for='username'>
              Username
            </label>
          </div>

          <div className='signup__field'>
            <input
              className='signup__input'
              type='text'
              name='email'
              id='email'
              required
            />
            <label className='signup__label' for='email'>
              Email
            </label>
          </div>

          <div className='signup__field'>
            <input
              className='signup__input'
              type='password'
              name='password'
              id='password'
              required
            />
            <label className='signup__label' for='password'>
              Password
            </label>
          </div>

          <button>Sign up</button>
        </form>
        <p className='or'>OR</p>

        <button type="button" class="login-with-google-btn" >
          Sign up with Google
        </button>
      </div>
    </div>
  );
}

export default Signup;
