import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const { registerData, handleRegisterChange } = useAuth();
  const navigate = useNavigate();

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registered:', registerData);
    alert(`Registered user: ${registerData.username}`);
    navigate('/'); // redirect back to login
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
      <form onSubmit={handleRegisterSubmit}>
        <h2>Register</h2>
        <input type="text" name="username" placeholder="Username" value={registerData.username} onChange={handleRegisterChange} required />
        <input type="email" name="email" placeholder="Email" value={registerData.email} onChange={handleRegisterChange} required />
        <input type="password" name="password" placeholder="Password" value={registerData.password} onChange={handleRegisterChange} required />
        <button type="submit">Register</button>
        <p style={{ marginTop: '1rem' }}>
          Already registered? <Link to="/" style={{ color: '#2F80ED', textDecoration: 'underline' }}>Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;