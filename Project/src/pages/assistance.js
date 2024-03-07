import React from 'react'
import { Link } from 'react-router-dom';

const Assistance = () => {
  return (
    <div style={{position: 'absolute', top: 0, left: 0, width: '100%',  marginTop: '10px'}}>
      <header style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
        <div>
          <h1>
            <span style={{ color: "red" }}>X</span>
            <span style={{ color: "blue" }}>Y</span>
            <span style={{ color: "green" }}>Z</span> Bistro
          </h1>
          <p style={{textAlign : 'center'}}>Since 2015</p>
        </div>
      </header>
      <div style={{ backgroundColor: '#CD5C5C', width: '400px', height: '200px', marginTop: '75px', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ color: 'black', textAlign: 'center', fontSize: '30px', fontWeight: 'bold' }}>Assistance Required</p>
      </div>
      <div>
        <p style={{fontSize: '20px', fontWeight: 'bold', textAlign: 'center', marginTop: '60px'}}>Someone will be with you shortly!</p>
      </div>
      <footer style= {{ textAlign: 'center', paddingBottom: '20px' }}>
        <Link to="/welcome" stlye={{textDecoration: 'none' }}>
          <button style={{padding: '20px 30px', fontSize: '16px', marginTop: '150px', backgroundColor: '#FFFF8F', color: 'red'}}>X CANCEL REQUEST X</button>
        </Link>
      </footer>
    </div>
  )
}

export default Assistance