import React from 'react';
import Menu from './Menu';

const MenuSection = () => {
  return (
    <div id= 'menu-section' className="menu-section">
      <div className="menu-content">
        <h1 className="order-online">ORDER ONLINE</h1>
        <p className="allergy-notice">
          Please add your requirements, changes, and allergy 
          information in the notes section during checkout. 
          If you or anyone you are ordering for suffer from 
          severe allergies or food intolerance, please contact 
          the takeaway via telephone prior to ordering
        </p>
        <Menu />
      </div>
    </div>
  );
};

export default MenuSection;
