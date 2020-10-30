import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className='Login'>
      <div className='side'>
        <h1 id='header'>reLEARN</h1>
        <p style={{ color: 'aliceblue', fontSize: '15px' }}>
          The Social Network for Learning!
        </p>
      </div>
      <div className='vl'></div>
      <div
        className='account'
        style={{ position: 'relative', textAlign: 'left', right: '35%' }}>
        <form className='signup' onsubmit='return false' autocomplete='off'>
          <h1>Login</h1>
          <div class='signup__field'>
            <input
              className='signup__input'
              type='text'
              name='username'
              id='username'
              required
            />
            <label className='signup__label' for='username'>
              Username/Email
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

          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
