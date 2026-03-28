import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [verificationSent, setVerificationSent] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending verification email to:', form.email);

    // Simulate sending email
    setVerificationSent(true);

    // Store registration data temporarily in localStorage
    localStorage.setItem('pendingRegistration', JSON.stringify(form));
  };

  const handleVerificationClick = () => {
    // Simulate clicking email verification
    const registeredUser = localStorage.getItem('pendingRegistration');
    if (registeredUser) {
      console.log('User verified:', JSON.parse(registeredUser));
      localStorage.removeItem('pendingRegistration');
      alert('You have successfully registered!');
      navigate('/'); // Redirect to login page
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
      {!verificationSent ? (
        <form onSubmit={handleRegister}>
          <h2>Register</h2>
          <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          <button type="submit">Register</button>
        </form>
      ) : (
        <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
          <h2>Verification Sent!</h2>
          <p>Click the button below to simulate verifying your email.</p>
          <button onClick={handleVerificationClick}>Verify Email</button>
        </div>
      )}
    </div>
  );
};

export default Register;