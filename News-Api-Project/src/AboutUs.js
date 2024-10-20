import React from 'react';

function AboutUs() {
  const pageStyle = {
    padding: '20px',
  };

  return (
    <><div style={pageStyle}>
      <h1>About Us</h1>
      <p>This project displays the latest news fetched from an external API and allows the admin to add news articles manually.</p>
    </div>
    </>
  );
}

export default AboutUs;
