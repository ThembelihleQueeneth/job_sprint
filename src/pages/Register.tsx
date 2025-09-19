import React, { useState } from 'react'
import styles from '../styles/Register.module.css'
import { Link, useNavigate } from "react-router-dom"

export const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault(); 

    
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if email already exists
    if (users.some((user: any) => user.email === email)) {
      alert("Email already registered");
      return;
    }

    // Add new user
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful!');
    navigate('/login'); 
  };

  return (
    
<>
      
      <form onSubmit={handleRegister} className={styles['registerContainer']}>
        <h1 className={styles['register-heading']}>Register</h1>
        <input
          type="text"
          className={styles['register-input']}
          placeholder="User name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className={styles['register-input']}
          type="email"
          placeholder="Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className={styles['register-input']}
          type="password"
          placeholder="Password*"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className={styles['register-input']}
          type="password"
          placeholder="Confirm Password*"
          required
        />

        <button type="submit" className={styles['registerBtn']}>
          Register
        </button>
        <p className={styles.account}>
        Already have an account?{' '}
        <Link to="/login" className={styles['login-link']}>
          Login
        </Link>
      </p>
      </form>

      
    </>
  );
};
