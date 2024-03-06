import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const [assistanceMessage, setAssistanceMessage] = useState('');

  const handleCallForAssistance = () => {
    setAssistanceMessage('Someone is coming to assist you right away');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>XYZ Bistro</h1>
      <h1>Welcome</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <Link to="/menu" style={{ marginRight: '20px', textDecoration: 'none' }}>
          <button style={{ padding: '10px 20px', fontSize: '16px' }}>Start Ordering</button>
        </Link>
        <Link to="/menu" style={{ textDecoration: 'none' }}>
          <button style={{ padding: '10px 20px', fontSize: '16px' }}>I am new here !</button>
        </Link>
      </div>
      <button onClick={handleCallForAssistance} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '50px' }}>Call for assistance</button>
      {assistanceMessage && <p>{assistanceMessage}</p>}
    </div>
  );
};

export default Welcome;
