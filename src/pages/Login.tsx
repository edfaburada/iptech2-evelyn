import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const { loginData, handleLoginChange } = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', loginData);
    alert(`Logged in as ${loginData.email}`);
    navigate('/dashboard'); // go to dashboard after login
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
      <form onSubmit={handleLoginSubmit}>
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleLoginChange} required />
        <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} required />
        <button type="submit">Login</button>
        <p style={{ marginTop: '1rem' }}>
          Not registered? <Link to="/register" style={{ color: '#2F80ED', textDecoration: 'underline' }}>Register now</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;