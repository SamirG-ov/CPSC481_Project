import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home Page</h1>
        <br />
        <ul>
            <li><Link to="/welcome">Welcome</Link></li>
            <li><Link to="/assistance">Assistance</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/orderCart">OrderCart</Link></li>
            <li><Link to="/trackOrder">TrackOrder</Link></li>
            <li><Link to="/payment">Payment</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
        </ul>
    </div>
  )
}

export default Home