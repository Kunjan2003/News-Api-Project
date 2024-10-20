import React from 'react';

function ContactUs() {
  const pageStyle = {
    padding: '20px',
  };

  const imgStyle = {
    width: '50px',
    height: '50px',
    marginRight: '10px',
  };

  return (
    <div style={pageStyle}>
      <h1>Contact Us</h1>
      <p>
        <img src="https://img.freepik.com/premium-vector/orange-envelope-with-t-mail-logo-it_1277826-407.jpg" alt="Mail" style={imgStyle} />
        <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-instagram-3d-icon-download-in-png-blend-fbx-gltf-file-formats--app-logo-brand-social-media-pack-logos-icons-5753427.png?f=webp" alt="Mail" style={imgStyle} />
        <img src="https://img.freepik.com/premium-vector/3d-vector-facebook-icon-social-media_721791-1528.jpg?size=338&ext=jpg&ga=GA1.1.1819120589.1727740800&semt=ais_hybrid" alt="Facebook" style={imgStyle} />
      </p>
    </div>
  );
}

export default ContactUs;
