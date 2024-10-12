import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import pasha from '../../assets/images/pasha-logo.png';
import cart from '../../assets/icons/cart.svg';
import { BasketContext, BasketContextProps } from '../../context/BasketContext'; // Import BasketContext

const Navbar: React.FC = () => {
  const location = useLocation();

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [shouldScroll, setShouldScroll] = useState(false);

  // Get basket items from context
  const { basketItems } = useContext<BasketContextProps>(BasketContext);
  
  // Calculate total number of items in basket
  const totalItems = basketItems.reduce((acc, item) => acc + item.quantity, 0);

  // Function to handle the logo click
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // If already on the homepage, refresh the page
    if (location.pathname === '/') {
      window.location.reload(); // Refresh the page
    }
  };

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Scroll to a section
  const scrollToSection = (mySection: string) => {
    const section = document.getElementById(mySection);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the section
    }
  };

  // useEffect to handle scroll after navigation
  useEffect(() => {
    if (location.pathname === '/' && shouldScroll) {
      scrollToSection('menu-section');
      setShouldScroll(false); // Reset scroll state
    }
  }, [location, shouldScroll]);

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />
      </div>
      {isMenuOpen && (
        <div className="menu-overlay">
          <div className="menu-overlay-content">
            {/* Close Icon */}
            <div className="close-icon" onClick={toggleMenu}>
              &times;
            </div>
            {/* Menu Links */}
            <ul className="menu-list">
              <li className='menu-link' onClick={toggleMenu}>
                <Link to="/">Home</Link>
              </li>
              <li className='menu-link' onClick={() => {
                toggleMenu();
                // If on a different page, navigate and set shouldScroll to true
                if (location.pathname !== '/') {
                  setShouldScroll(true);
                } else {
                  // If already on home page, scroll immediately
                  scrollToSection('menu-section');
                }
              }}>
                <Link to='/'>Order Online</Link>
              </li>
              <li className='menu-link' onClick={toggleMenu}>
                <Link to="/app-page">Mobile App</Link>
              </li>
              <li className='menu-link' onClick={toggleMenu}>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li className='menu-link' onClick={toggleMenu}>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="logo">
        <Link to="/" onClick={handleLogoClick}>
          <img src={pasha} alt="Pasha" />
        </Link>
      </div>
      <div className="cart">
        <div className="vertical-line"></div>
        <Link to='/basket'>
          <img src={cart} alt="Checkout" />
          {/* Basket item count indicator */}
          {totalItems > 0 && <div className="basket-indicator">{totalItems}</div>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
