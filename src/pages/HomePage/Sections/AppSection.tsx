import React from 'react';
import app from '../../../assets/images/pasha-app.jpeg';
import { useNavigate } from 'react-router-dom';

const AppSection = () => {
  const navigate = useNavigate();
  const handleAppClick = () => {
    navigate('/app-page'); // Navigate to the bookings page
  };
  return (
    <div className='app-section'>
      <img className='image-section' src={app} alt="Welcome" />
      <div className='app-description-section'>
        <div className='app-text'>
          <h1 className='app-heading'>DOWNLOAD OUR APP</h1>
          <p>
            Placing an order at Pasha has not been easier. 
            Simply place your order on this website or 
            download our app. Downloading our app will 
            allow you to be interactive with our restaurant 
            like never before. When you place an order, we are 
            able to notify you when you can expect your order. 
            Through our app, we keep you updated from the food 
            prep to the order leaving our door to yours. Not to 
            forget the exclusive offers. DON’T MISS OUT!!
          </p>
          <button className='app-button' onClick={handleAppClick}>
            Download App
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
