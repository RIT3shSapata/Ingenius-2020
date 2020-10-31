import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className='Dashboard'>
      <content>
        <h1>Tasks</h1>
        <div className='tasks-wrapper'>
          <div className='primary-tasks'>
            <div className='items-wrapper'>
              <div className='items'>
                <input type='checkbox' id='checkbox' />
                Task 1
              </div>
              <button id='submit'>Submit Certificate</button>
            </div>
            <br />
            <br />
            <div className='items-wrapper'>
              <div className='items'>
                <input type='checkbox' id='checkbox' />
                Task 2
              </div>
              <button id='submit'>Submit Certificate</button>
            </div>
            <br />
            <br />
            <div className='items-wrapper'>
              <div className='items'>
                <input type='checkbox' id='checkbox' />
                Task 3
              </div>
              <button id='submit'>Submit Certificate</button>
            </div>
            <br />
            <br />
            <div className='items-wrapper'>
              <div className='items'>
                <input type='checkbox' id='checkbox' />
                Task 4
              </div>
              <button id='submit'>Submit Certificate</button>
            </div>
            <br />
            <br />
          </div>
        </div>
      </content>

      <aside>
        <div className='right-header'>
          <h1 id='right-heading'>UPCOMING HACKATHONS</h1>
        </div>
        <div className='text-box column'>
          <div className='column'>
            <div className='schedule-box'>
              <div className='link'>
                <a href='#'>Hack 1</a>
              </div>
            </div>
            <div className='schedule-box'>
              <div className='link'>
                <a href='#'>Hack 2</a>
              </div>
            </div>
            <div className='schedule-box'>
              <div className='link'>
                <a href='#'>Hack 3</a>
              </div>
            </div>
            <div className='schedule-box'>
              <div className='link'>
                <a href='#'>Hack 4</a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Dashboard;
