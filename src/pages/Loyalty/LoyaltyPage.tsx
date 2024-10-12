import React from 'react';
import './LoyaltyPage.css'; // Import your CSS for styling

const LoyaltyPage = () => {
  return (
    <div className="loyalty-container">
      <section className="loyalty-section">
        <h2 className="loyalty-heading">WHAT IS IT?</h2>
        <p className="loyalty-text">
          Place an order with us and we reward you with points that you can use for future orders. 
          Points mean free food so take advantage of our loyalty scheme and enjoy money off each order 
          or better still, collect enough points for a free meal!
        </p>
      </section>
      <section className="loyalty-section">
        <h2 className="loyalty-heading">HOW DO I JOIN?</h2>
        <p className="loyalty-text">
          You don’t have to! Once you sign up and place your order, points are automatically allocated to your account.
        </p>
      </section>
      <section className="loyalty-section">
        <h2 className="loyalty-heading">HOW MUCH DOES IT COST?</h2>
        <p className="loyalty-text">
          It’s free!
        </p>
      </section>
      <section className="loyalty-section">
        <h2 className="loyalty-heading">HOW MUCH CAN I SAVE?</h2>
        <p className="loyalty-text">
          For every £1 you spend, you get 5 points. So for example, if you spend £10, you earn 50 points.
        </p>
        <p></p>
        <p className="loyalty-text">
            &nbsp;You can use these points on your next order. When redeeming your points, you will get £1 off for every 100 points.
        </p>
      </section>
    </div>
  );
};

export default LoyaltyPage;
