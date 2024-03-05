import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Feedback submitted:', feedback);
    alert('Thank you for your feedback');
    navigate('/welcome');
  };

  return (
    <div>
      <h1>Feedback</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="feedback">Your Feedback:</label><br />
        <textarea
          id="feedback"
          name="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows="5"
          cols="50"
          required
        /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
