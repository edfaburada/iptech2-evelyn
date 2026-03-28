import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const Login = () => {
  const { loginData, handleLoginChange } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Show success message if redirected from registration
  useEffect(() => {
    if (location.state?.successMessage) {
      setSuccessMessage(location.state.successMessage);
      // Remove the state after displaying
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate checking verification
    const registeredUsers = JSON.parse(localStorage.getItem('verifiedUsers') || '[]');
    const userExists = registeredUsers.find(
      (user: { email: string; password: string }) =>
        user.email === loginData.email && user.password === loginData.password
    );

    if (!userExists) {
      alert('Invalid credentials or email not verified!');
      return;
    }

    alert(`Logged in as ${loginData.email}`);
    navigate('/dashboard'); // go to dashboard after login
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
      <form onSubmit={handleLoginSubmit}>
        <h2>Login</h2>

        {successMessage && (
          <p style={{ color: 'green', marginBottom: '1rem', textAlign: 'center' }}>
            {successMessage}
          </p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleLoginChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleLoginChange}
          required
        />
        <button type="submit">Login</button>

        <p style={{ marginTop: '1rem', textAlign: 'center' }}>
          Not registered?{' '}
          <Link to="/register" style={{ color: '#2F80ED', textDecoration: 'underline' }}>
            Register now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;