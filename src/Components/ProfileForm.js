import { FormControl, MenuItem, Select, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './ProfileForm.css';
import { Link } from 'react-router-dom';

function ProfileForm() {
  const [experience, setExperience] = useState(0);
  useEffect(() => {
    console.log(experience);
  }, [experience]);
  return (
    <div className='about'>
      <div
        className='account '
        style={{ position: 'relative', textAlign: 'left', right: '35%' }}>
        <form className='signup' onsubmit='return false' autocomplete='off'>
          <h1>Let us know you better!</h1>
          <div class='signup__field'>
            <input
              className='signup__input'
              type='text'
              name='username'
              id='username'
              required
            />
            <label className='signup__label' for='username'>
              LinkedIn
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
            <label className='signup__label' for='username'>
            GitHub
            </label>
          </div>

          <div>
            <label>Experience</label>
            <div className='option'>
              <select>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
          </div>

          <div>
            <label>Interest-1</label>
            <div className='option'>
              <select>
                <option value={'Deep Learning'}>Deep Learning</option>
                <option value={'Machine Learning'}>Machine Learning</option>
                <option value={'Natural Language Processing'}>
                  Natural Language Processing
                </option>
                <option value={'Full Stack Web Development'}>
                  Full Stack Web Development
                </option>
                <option value={'Computer Vision'}>Computer Vision</option>
                <option value={'App Development'}>App Development</option>
                <option value={'Backend Development'}>
                  Backend Development
                </option>
                <option value={'Frontend Development'}>
                  Frontend Development
                </option>
              </select>
            </div>
          </div>

          <div>
            <label>Interest-2</label>
            <div className='option'>
              <select>
                <option value={'Deep Learning'}>Deep Learning</option>
                <option value={'Machine Learning'}>Machine Learning</option>
                <option value={'Natural Language Processing'}>
                  Natural Language Processing
                </option>
                <option value={'Full Stack Web Development'}>
                  Full Stack Web Development
                </option>
                <option value={'Computer Vision'}>Computer Vision</option>
                <option value={'App Development'}>App Development</option>
                <option value={'Backend Development'}>
                  Backend Development
                </option>
                <option value={'Frontend Development'}>
                  Frontend Development
                </option>
              </select>
            </div>
          </div>

          <div>
            <label>Interest-3</label>
            <div className='option'>
              <select>
                <option value={'Deep Learning'}>Deep Learning</option>
                <option value={'Machine Learning'}>Machine Learning</option>
                <option value={'Natural Language Processing'}>
                  Natural Language Processing
                </option>
                <option value={'Full Stack Web Development'}>
                  Full Stack Web Development
                </option>
                <option value={'Computer Vision'}>Computer Vision</option>
                <option value={'App Development'}>App Development</option>
                <option value={'Backend Development'}>
                  Backend Development
                </option>
                <option value={'Frontend Development'}>
                  Frontend Development
                </option>
              </select>
            </div>
          </div>

          <div>
            <label>Proficiency-1</label>
            <div className='option'>
              <select>
                <option value={'Deep Learning'}>Deep Learning</option>
                <option value={'Machine Learning'}>Machine Learning</option>
                <option value={'Natural Language Processing'}>
                  Natural Language Processing
                </option>
                <option value={'Full Stack Web Development'}>
                  Full Stack Web Development
                </option>
                <option value={'Computer Vision'}>Computer Vision</option>
                <option value={'App Development'}>App Development</option>
                <option value={'Backend Development'}>
                  Backend Development
                </option>
                <option value={'Frontend Development'}>
                  Frontend Development
                </option>
              </select>
            </div>
          </div>

          <div>
            <label>Proficiency-2</label>
            <div className='option'>
              <select>
                <option value={'Deep Learning'}>Deep Learning</option>
                <option value={'Machine Learning'}>Machine Learning</option>
                <option value={'Natural Language Processing'}>
                  Natural Language Processing
                </option>
                <option value={'Full Stack Web Development'}>
                  Full Stack Web Development
                </option>
                <option value={'Computer Vision'}>Computer Vision</option>
                <option value={'App Development'}>App Development</option>
                <option value={'Backend Development'}>
                  Backend Development
                </option>
                <option value={'Frontend Development'}>
                  Frontend Development
                </option>
              </select>
            </div>
          </div>

          <button>Login</button>
        </form>
        <div className='side'>
      <Link to='/Home'>
        <h1 id='header'>reLEARN</h1>
      </Link>
        <p style={{ color: 'aliceblue', fontSize: '15px' }}>
          The Social Network for Learning!
        </p>
      </div>
      </div>
    </div>
  );
}

export default ProfileForm;
