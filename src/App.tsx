import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Your individual page components
import HomePage from './pages/HomePage/HomePage';
import Basket from './pages/Basket/basket';
import Bookings from './pages/Bookings/bookings';
import AppPage from './pages/App/AppPage';
import LoyaltyPage from './pages/Loyalty/LoyaltyPage';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import ContactUs from './pages/ContactUs/ContactUs';
import { BasketProvider } from './context/BasketContext';
// Import other pages/components as needed

function App() {
  return (
    <BasketProvider>
      <Router>
        <div className="App">
          <Navbar />

          {/* Define your routes here */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/app-page" element={<AppPage />} />
            <Route path="/loyalty-points" element={<LoyaltyPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact-us" element={<ContactUs />} />
            {/* Add more routes as needed */}
          </Routes>

          <Footer />
        </div>
      </Router>
    </BasketProvider>
  );
}

export default App;
