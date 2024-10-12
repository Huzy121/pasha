import React from 'react';
import './AppPage.css';

// Replace these imports with your actual image paths
import googlePlay from '../../assets/images/google-play.png';
import appStore from '../../assets/images/app-store.png';

const AppPage: React.FC = () => {
  return (
    <div className="download-page-container">
      <a
        href="https://play.google.com/store/apps/details?id=com.pashanewport"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={googlePlay}
          alt="Get it on Google Play"
          className="store-button"
        />
      </a>
      <a
        href="https://apps.apple.com/gb/app/id6470901902"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={appStore}
          alt="Available on the App Store"
          className="store-button"
        />
      </a>
    </div>
  );
};

export default AppPage;
