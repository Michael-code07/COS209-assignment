import React from 'react';
import './Sections.css';

const ContactsSection = () => {
  return (
    <div className="contacts-page">
      <header>
        <h1>Contacts</h1>
      </header>
      <section className="contacts-section" style={{ padding: '40px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <h2>Contact Me</h2>
        <p><strong>Phone:</strong> 09055866432</p>
        <p><strong>Email:</strong> iwegbunamicheal24@gmail.com</p>
        <p>Feel free to reach out for collaborations, projects</p>
      </section>
    </div>
  );
};

export default ContactsSection;
