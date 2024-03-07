import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "../assets/restaurant.jpg";

const Welcome = () => {
  const [assistanceMessage, setAssistanceMessage] = useState('');

  const handleCallForAssistance = () => {
    setAssistanceMessage('Someone is coming to assist you right away');
  };

  const styles = `
    .welcome-page {
      position: relative;
      width: 100%;
      height: 100vh;
    }

    .background-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${backgroundImage});
      background-size: cover;
      background-position: center;
      opacity: 0.5; /* Adjust as needed */
    }

    .content {
      position: relative;
      z-index: 1; /* Ensure content appears above background image */
      text-align: center;
      padding-top: 10px; /* Adjust spacing from top */
    }

    /* Add additional styling as needed */
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="welcome-page">
        <div className="background-image"></div> {/* Background Image */}
        <div className="content">
          <header>
            <div>
              <h1>
                <span style={{ color: "red" }}>X</span>
                <span style={{ color: "blue" }}>Y</span>
                <span style={{ color: "green" }}>Z</span> Bistro
              </h1>
              <p style={{textAlign : 'center'}}>Since 2015</p>
            </div>
          </header>
          <h1>Welcome</h1>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <Link to="/menu" style={{ marginRight: '20px', textDecoration: 'none' }}>
              <button style={{ padding: '10px 20px', fontSize: '16px' }}>I am new here!</button>
            </Link>
            <Link to="/menu" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '10px 20px', fontSize: '16px' }}>I know my way around!</button>
            </Link>
          </div>
          <Link to="/assistance" style={{ textDecoration: 'none' }}>
            <button style={{ padding: '10px 20px', fontSize: '16px', marginTop: '50px' }}>Call for assistance</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Welcome = () => {
//   const [assistanceMessage, setAssistanceMessage] = useState('');

//   const handleCallForAssistance = () => {
//     setAssistanceMessage('Someone is coming to assist you right away');
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '10px' }}>
//        <header style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
//         <div>
//           <h1>
//             <span style={{ color: "red" }}>X</span>
//             <span style={{ color: "blue" }}>Y</span>
//             <span style={{ color: "green" }}>Z</span> Bistro
//           </h1>
//           <p style={{textAlign : 'center'}}>Since 2015</p>
//         </div>
//       </header>
//         <h1>Welcome</h1>
//       <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
//         <Link to="/menu" style={{ marginRight: '20px', textDecoration: 'none' }}>
//           <button style={{ padding: '10px 20px', fontSize: '16px' }}>I am new here!</button>
//         </Link>
//         <Link to="/menu" style={{ textDecoration: 'none' }}>
//           <button style={{ padding: '10px 20px', fontSize: '16px' }}>I know my way around!</button>
//         </Link>
//       </div>
//         <Link to="/assistance" stlye={{textDecoration: 'none' }}>
//           <button style={{padding: '10px 20px', fontSize: '16px', marginTop: '50px'}}>Call for assistance</button>
//         </Link>
//     </div>
//   );
// };

// export default Welcome;
