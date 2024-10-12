import welcome from '../../../assets/images/welcome-image.jpg';

const WelcomeSection = () => {
  return (
    <div className='content-section'>
      <div className='welcome-description-section'>
        <div className='welcome-text'>
          <div className='temp'>
            <h1 className='welcome-heading'>Welcome to Pasha</h1>
            <p>
              Pasha is a renowned Indian restaurant in Newport, 
              offering a truly authentic dining experience. Our 
              menu showcases traditional Indian dishes infused 
              with contemporary twists. With exquisite flavors, a 
              warm ambiance, and attentive service, Pasha is 
              perfect for any occasion. Enjoy our dine-in, 
              takeaway, or delivery services and let us bring the
              magic of Indian cuisine to your table. Visit Pasha
              and embark on a flavorful journey through India.
            </p>
          </div>
        </div>
      </div>
      <img className='image-section' src={welcome} alt="Welcome" />
    </div>
  );
};

export default WelcomeSection;
