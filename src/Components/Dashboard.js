import React from 'react';
import './Dashboard.css';
import task from '../img/task.png';
import hack from '../img/hackathon.png';

function Dashboard() {
  return (
    <div className='Dashboard'>
       <h1 className='Profile__achievementsTitle'>DASHBOARD</h1>
        <hr className="gradient_line" />
      <content>
        <h1 id='right-heading'>TASKS</h1>
        <img src={task} alt="Logo" />
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
              <div>
              <button id='submit'>Submit Certificate</button>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </content>

      <aside>
        <div className='right-header'>
          <h1 id='right-heading'>UPCOMING HACKATHONS</h1>
          <img src={hack} alt="Logo" />
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
