import React, { useState } from 'react';
import styles from '../styles/Register.module.css';
import { Link, useNavigate } from "react-router-dom";

type User = {
  name: string;
  email: string;
  password: string;
};

export const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  
  const getUsers = (): User[] => {
    return JSON.parse(localStorage.getItem('users') || '[]');
  };

 
  const saveUsers = (users: User[]) => {
    localStorage.setItem('users', JSON.stringify(users));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const users = getUsers();

    
    if (users.some((user) => user.email === email)) {
      alert("Email already registered");
      return;
    }

    
    const newUser: User = { name, email, password };
    users.push(newUser);
    saveUsers(users);

    alert('Registration successful!');
    navigate('/login'); 
  };

  return (
    <form onSubmit={handleRegister} className={styles['registerContainer']}>
      <h1 className={styles['register-heading']}>Register</h1>
      <label htmlFor="
        " className={styles['label-form']}>Enter Username:</label>
      <input
        type="text"
        className={styles['register-input']}
        placeholder="User name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      /> <br />
      <label htmlFor="
        " className={styles['label-form']}>Enter Email:</label>

      <input
        className={styles['register-input']}
        type="email"
        placeholder="Email*"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      /> <br />
      <label htmlFor="
        " className={styles['label-form']}>Enter Password:</label>

      <input
        className={styles['register-input']}
        type="password"
        placeholder="Password*"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      /> <br />
      <label htmlFor="
        " className={styles['label-form']}>Confirm Password:</label>
      <input
        className={styles['register-input']}
        type="password"
        placeholder="Confirm Password*"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
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
  );
};
