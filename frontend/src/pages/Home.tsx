import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to Healthcare Management System</h1>
      <div className="features">
        <div className="feature-card">
          <h3>Find Nearby Hospitals</h3>
          <p>Locate and get information about hospitals in your area</p>
        </div>
        <div className="feature-card">
          <h3>Book Appointments</h3>
          <p>Schedule appointments with healthcare providers</p>
        </div>
        <div className="feature-card">
          <h3>Access Health Records</h3>
          <p>View and manage your health records securely</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
