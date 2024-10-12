import { useNavigate } from 'react-router-dom';
import loyalty from '../../../assets/images/loyalty-image.jpg';

const LoyaltySection = () => {
  const navigate = useNavigate();
  const handleLoyaltyClick = () => {
    navigate('/loyalty-points'); // Navigate to the bookings page
  };
  return (
    <div className='content-section'>
      <div className='welcome-description-section'>
        <div className='welcome-text'>
          <div className='temp'>
            <h1 className='welcome-heading'>Pasha Loyalty Club</h1>
            <p>
              We want to reward our customers for their loyalty. 
              We have therefore created a loyalty scheme whereby 
              customers will earn loyalty points on every order. You 
              can use these points immediately on future orders, or 
              stack these points up for a even bigger discount on 
              your next order!
            </p>
            <button className='learn-more-button' onClick={handleLoyaltyClick}>
              Learn More
            </button>
          </div>
        </div>
      </div>
      <img className='image-section' src={loyalty} alt="Loyalty" />
    </div>
  );
};

export default LoyaltySection;
