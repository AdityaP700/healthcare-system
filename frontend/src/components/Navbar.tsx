import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Healthcare System</h1>
      </div>
      <div className="navbar-menu">
        <a href="/">Home</a>
        <a href="/hospitals">Find Hospitals</a>
        <a href="/appointments">Appointments</a>
        <a href="/records">Health Records</a>
        <a href="/profile">Profile</a>
      </div>
    </nav>
  );
};

export default Navbar;
