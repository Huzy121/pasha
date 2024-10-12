import {useLocation, useNavigate } from 'react-router-dom';
import './footer.css'
const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleNavigation = (path: string) => {
      if (location.pathname === path) {
        window.location.reload(); // Refresh the page
      }else{
        navigate(path);
      }
    };
    return (
      <footer className="footer">
        <div className='line'></div>
        <div className="footer-content">
          <div className="address-section">
            <h1 className='title'>ADDRESS</h1>
            <div className='underline'></div>
            <div className='address'>
              <p className='address-line'>2 Constance St</p>
              <p className='address-line'>Newport</p>
              <p className='address-line'>NP19 7DB</p>
            </div>
            <p className='phone'>Tel: 01633257939</p>
          </div>
          <div className="opening-hours-section">
            <h1 className="title">Opening Hours</h1>
            <div className="underline"></div>
            <div className="opening-hours-list">
              <div className="opening-hours-row">
                <div className="day">Monday</div>
                <div className="time-container">
                  <span className="time">17:30</span>
                  <span className="time">–</span>
                  <span className="time">23:00</span>
                </div>
              </div>
              <div className="opening-hours-row">
                <div className="day">Tuesday</div>
                <div className="time-container">
                  <span className="time">–</span>
                </div>
              </div>
              <div className="opening-hours-row">
                <div className="day">Wednesday</div>
                <div className="time-container">
                  <span className="time">17:30</span>
                  <span className="time">–</span>
                  <span className="time">23:00</span>
                </div>
              </div>
              <div className="opening-hours-row">
                <div className="day">Thursday</div>
                <div className="time-container">
                  <span className="time">17:30</span>
                  <span className="time">–</span>
                  <span className="time">23:00</span>
                </div>
              </div>
              <div className="opening-hours-row">
                <div className="day">Friday</div>
                <div className="time-container">
                  <span className="time">17:30</span>
                  <span className="time">–</span>
                  <span className="time">23:00</span>
                </div>
              </div>
              <div className="opening-hours-row">
                <div className="day">Saturday</div>
                <div className="time-container">
                  <span className="time">17:30</span>
                  <span className="time">–</span>
                  <span className="time">23:00</span>
                </div>
              </div>
              <div className="opening-hours-row">
                <div className="day">Sunday</div>
                <div className="time-container">
                  <span className="time">17:30</span>
                  <span className="time">–</span>
                  <span className="time">23:00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="useful-links">
            <h1 className='title'>Useful Links</h1>
            <div className='underline'></div>
            <div className='links'>
              <p onClick={() => handleNavigation('/app-page')} className="clickable-link">Mobile App</p>
              <p onClick={() => handleNavigation('/loyalty-points')} className="clickable-link">Loyalty Points</p>
              <p onClick={() => handleNavigation('/privacy-policy')} className="clickable-link">Privacy Policy</p>
              <p onClick={() => handleNavigation('/contact-us')} className="clickable-link">Contact Us</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  export default Footer