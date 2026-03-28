import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get username from state passed from Login
  const username = location.state?.username;

  // Redirect to login if no username (user tries to access dashboard directly)
  if (!username) {
    navigate('/');
    return null;
  }

  const handleLogout = () => {
    // Clear any logged-in info if stored in localStorage
    localStorage.removeItem('loggedInUser');
    
    // Redirect to login page
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Side Panel */}
      <div style={{
        width: '220px',
        backgroundColor: '#2F80ED',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        boxSizing: 'border-box',
      }}>
        <h2 style={{ marginBottom: '2rem' }}>Dashboard</h2>
        <p>Hi, <b>{username}</b></p>
        <button
          onClick={handleLogout}
          style={{
            marginTop: 'auto',
            padding: '0.75rem 1rem',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#f6cde1',
            color: '#333',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        padding: '2rem',
        backgroundColor: '#f0f4f8',
      }}>
        <h2>Welcome, {username}!</h2>
        <p>This is your dashboard. You can add more content here like charts, reports, or user info.</p>

        {/* Example cards */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <div style={{
            flex: 1,
            backgroundColor: '#fff',
            padding: '1rem',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}>
            <h3>Profile</h3>
            <p>View and edit your profile information.</p>
          </div>
          <div style={{
            flex: 1,
            backgroundColor: '#fff',
            padding: '1rem',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}>
            <h3>Settings</h3>
            <p>Change your preferences and account settings.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;