import React from 'react';
import { logout } from '../services/authServices';

const Logout = () => {
  const handleLogout = async () => {
    try {
      const message = await logout();
      alert(message);
      // Optionally, redirect to login page or update state
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;