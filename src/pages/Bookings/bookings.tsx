import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Bookings.css'; // Import your CSS for styling

const Bookings: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    date: '',
    time: '17:30',
    people: '',
    specialRequirements: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with actual values from EmailJS
    emailjs.send('pasha', 'template_90f2xjo', {
      user_name: formData.name,
      user_email: formData.email,
      user_contactNumber: formData.contactNumber,
      booking_date: formData.date,
      booking_time: formData.time,
      number_of_people: formData.people,
      special_requirements: formData.specialRequirements,
    }, 'BleNedb2yUJeVsPij')
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      alert('Your booking request has been sent!');
    }, (error) => {
      console.error('Error sending email:', error.text);
      alert('There was an error sending your booking request.');
    });
  };

  const generateTimeOptions = (start: string, end: string, increment: number) => {
    const times = [];
    let current = new Date(`1970-01-01T${start}:00`);
    const endTime = new Date(`1970-01-01T${end}:00`);

    while (current <= endTime) {
      const formattedTime = current.toTimeString().slice(0, 5); // Get HH:MM format
      times.push(formattedTime);
      current.setMinutes(current.getMinutes() + increment); // Increment by 15 minutes
    }

    return times;
  };

  // Generate time options from 17:30 to 23:00 in 15-minute intervals
  const timeOptions = generateTimeOptions('17:30', '23:00', 15);

  return (
    <div className="page-content">
      <form className="booking-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="contactNumber"
          placeholder="Your Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="">Select Time</option>
          {timeOptions.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="people"
          placeholder="How Many People"
          value={formData.people}
          onChange={handleChange}
          required
          min="1"
        />
        <textarea
          name="specialRequirements"
          placeholder="Special Requirements"
          value={formData.specialRequirements}
          onChange={handleChange}
        />
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default Bookings;
