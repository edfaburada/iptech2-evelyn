import { useLocation, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get username from state passed from Login
  const username = location.state?.username;

  // If no username (user navigated directly), redirect to login
  if (!username) {
    navigate('/');
    return null;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h2>Dashboard</h2>
      <p>Welcome, <b>{username}</b>! You are now logged in.</p>
    </div>
  );
};

export default Dashboard;