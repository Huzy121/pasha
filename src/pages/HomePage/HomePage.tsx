import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import naan from '../../assets/videos/pasha-video.mp4';
import AppSection from './Sections/AppSection';
import LoyaltySection from './Sections/LoyaltySection';
import MenuSection from './Sections/MenuSection';
import WelcomeSection from './Sections/WelcomeSection';
const HomePage = () => {
  
  return (
    <>
      <BackgroundVideo />
      <WelcomeSection />
      <AppSection />
      <LoyaltySection />
      <MenuSection />
    </>
  );
};

const BackgroundVideo = () => {
  const scrollToSection = (mySection: string) => {
    const section = document.getElementById(mySection);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the section
    }
  };
  const navigate = useNavigate();
  const handleBookingClick = () => {
    navigate('/bookings'); // Navigate to the bookings page
  };
  return (
    <div className="video-section">
      <video autoPlay muted loop className="background-video">
        <source src={naan} type="video/mp4" />
        Your browser does not support the video tag
      </video>
      <div className="video-overlay">
        <h1>Welcome to PASHA</h1>
        <div className="button-container">
          <button className="overlay-button" onClick={()=>scrollToSection('menu-section')}>
            ORDER NOW 
            <svg className='overlay-cart'
              viewBox="0 0 155 137"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M58.205 2.706C55.744 5.168 54.778 5.423 47.5 5.539C32.522 5.777 26.847 11.786 22.984 31.5C21.746 37.817 20.809 41.907 19.09 48.5C17.232 55.63 17.421 56 22.918 56C29.697 56 31 55.322 31 51.797C31 50.153 31.625 46.489 32.388 43.654C33.151 40.819 34.328 35.8 35.003 32.5C36.851 23.462 37.94 20.295 39.702 18.83C41.782 17.101 57.002 16.043 57.001 17.628C56.999 20.736 60.203 21.356 76.813 21.464C92.971 21.569 93.558 21.501 95.611 19.286C97.43 17.323 98.721 17 104.754 17C113.807 17 115.537 18.352 117.543 27C118.372 30.575 119.452 34.85 119.942 36.5C120.433 38.15 121.394 42.768 122.079 46.762C122.764 50.757 123.892 54.495 124.585 55.07C125.278 55.645 128.017 55.977 130.672 55.808C136.634 55.428 136.568 57.49 131.372 34C130.581 30.425 129.514 25.594 129 23.264C127.699 17.367 125.679 13.803 121.611 10.232C117.537 6.655 108.837 4.451 102.677 5.436C99.084 6.01 98.373 5.759 95.888 3.039L93.113 0H77.011H60.909L58.205 2.706ZM4.775 59.548C1.229 61.486 0 63.922 0 69.011C0 72.257 0.633 73.787 2.923 76.077C4.531 77.685 6.91 79 8.211 79C10.524 79 10.667 79.554 14.857 104.694C19.497 132.535 20.458 135.242 26.101 136.37C27.833 136.717 51.063 137 77.724 137C130.442 137 131.353 136.909 133.853 131.423C134.475 130.059 136.895 117.736 139.232 104.038L143.48 79.132L146.697 78.529C153.731 77.209 156.594 67.128 151.587 61.306L149.174 58.5L78.337 58.279C17.188 58.089 7.127 58.262 4.775 59.548ZM36.429 79.571C37.293 80.436 38.022 81.448 38.049 81.821C38.077 82.195 38.695 89.7 39.425 98.5C40.889 116.171 40.529 118.312 36.183 117.81C32.356 117.368 31.302 113.229 30.449 95.298C29.777 81.194 29.851 80.18 31.616 79.155C34.132 77.694 34.59 77.733 36.429 79.571ZM66.774 97.989C66.963 109.86 66.691 115.668 65.902 116.618C64.231 118.631 60.236 118.31 59.035 116.066C58.445 114.963 58 107.228 58 98.066C58 83.144 58.148 81.852 60.073 79.927C61.939 78.061 62.364 77.998 64.323 79.297C66.4 80.675 66.513 81.537 66.774 97.989ZM94.965 80.934C95.552 82.031 96 89.637 96 98.5C96 107.363 95.552 114.969 94.965 116.066C94.377 117.163 92.879 118 91.5 118C90.121 118 88.623 117.163 88.035 116.066C86.522 113.239 86.667 81.733 88.2 80.2C90.037 78.363 93.808 78.772 94.965 80.934ZM123.716 80.703C124.664 83.172 122.369 113.442 121.047 115.912C119.684 118.46 115.885 118.647 114.383 116.241C112.967 113.974 115.315 82.531 117.057 80.432C118.697 78.455 122.919 78.626 123.716 80.703Z"/>
            </svg>
          </button>
          <button className="overlay-button" onClick={handleBookingClick}>
            BOOK TABLE
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;