import mapImage from '../../assets/images/location.png'; // Replace with the correct path to your image
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <p className="contact-text">
        We would love to hear from you! Get in touch using our details in our footer or come and see us in person!
      </p>
      <div className="map-container">
        <img src={mapImage} alt="Map Location" className="map-image" />
      </div>
    </div>
  );
};

export default ContactUs;
