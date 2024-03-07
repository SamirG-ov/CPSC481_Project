import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "../assets/restaurant.jpg";
import { red } from '@mui/material/colors';

const Welcome = () => {
  // const [assistanceMessage, setAssistanceMessage] = useState('');

  // const handleCallForAssistance = () => {
  //   setAssistanceMessage('Someone is coming to assist you right away');
  // };

  const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
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
      font-family: 'Abril Fatface', cursive; /* Apply Abril Fatface font */
      
      border-radius: 10px; /* Add border radius for a rounded look */
      padding: 20px; /* Add padding for better readability */
      
    }

    h1 {
      font-size: 38px; /* Adjust font size */
      margin-top: 0; /* Remove default margin */
      background-color: rgba(255, 255, 255, 0.5); /* Background shade (white with 50% opacity) */
      border-radius: 10px; /* Add border radius for a rounded look */
      padding: 5px; /* Add padding for better readability */
    }
    h2 {
      font-size: 68px; /* Adjust font size */
      margin-top: 0; /* Remove default margin */
      background-color: rgba(255, 255, 255, 0.5); /* Background shade (white with 50% opacity) */
      border-radius: 10px; /* Add border radius for a rounded look */
      padding: 10px; /* Add padding for better readability */
    }
    h3 {
      font-size: 28px; /* Adjust font size */
      margin-top: 0; /* Remove default margin */
      background-color: rgba(255, 255, 255, 0.5); /* Background shade (white with 50% opacity) */
      border-radius: 10px; /* Add border radius for a rounded look */
      padding: 5px; /* Add padding for better readability */
    }
    .button-container {
      display: flex;
      justify-content: center;
      margin-top: 50px; /* Adjust spacing between buttons */
      
    }
    .button-container button {
      padding: 15px 30px; /* Adjust button padding */
      font-size: 34px; /* Adjust font size */
      background-color: rgba(255, 255, 255, 0.5); /* Make background transparent */
      border: 2px solid #fff; /* Add border */
      color: #AE1818; /* Set font color */
      cursor: pointer; /* Add cursor pointer */
      transition: background-color 0.3s ease, color 0.3s ease; /* Add smooth transition */
      margin: 0 10px; /* Adjust spacing between buttons */
      font-family: 'Abril Fatface', cursive;
    }

    .button-container button:hover {
      background-color: #fff; /* Change background color on hover */
      color: #000; /* Change font color on hover */
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="welcome-page">
        <div className="background-image"></div> {/* Background Image */}
        <div className="content">
          <h1>Welcome to </h1>
          <div>
              <h2>
                <span style={{ color: "red" }}>X</span>
                <span style={{ color: "blue" }}>Y</span>
                <span style={{ color: "green" }}>Z</span> Bistro
              </h2>
              <h3>
              Since 2015
              </h3>
              
            </div>
            <div className="button-container">
            
            <Link to="/menu">
              <button>I am new here!</button>
            </Link>
            <Link to="/menu">
              <button>I know my way around!</button>
            </Link>
            
            <Link to="/assistance">
              <button>Call for assistance</button>
            </Link>
            </div>
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
