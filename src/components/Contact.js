import React from 'react';
import '../styles/Contact.css'; // Assuming you have a CSS file for styling

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <p>📞 <a href="tel:+918770153755">+91 8770153755</a></p>
      <p>📍 12 Jalalabad Bank Colony Babai Road Narmadapuram 461001</p>
      <p>🕒 Mon-Sat: 9am - 7pm</p>
      
      {/* Embed Google Map */}
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.96675950596043!2d77.74170150424379!3d22.748001302366614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397dcfb9c99dc1ef%3A0x46fc29c3c4b1b05c!2sNarmadapuram%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1743935309151!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;