import React from 'react';

const Homepage = ({ userEmail, onLogout }) => {
  return (
    <div>
      <h2>Welcome, {userEmail}!</h2>
      <p>This is your homepage.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Homepage;
