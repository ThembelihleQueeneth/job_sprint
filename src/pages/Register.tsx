import React, { useState } from 'react'
import styles from '../styles/Register.module.css'
import {Link, useNavigate} from "react-router-dom"

export const Register = () => {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const handleRegister = () => {
      //Get existing usres from localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]')

      //Check if email already exists
      if(users.some((user : any) => user.email === email)) {
        alert("Email already registerd")
        return;
      }

      //Add new user
      users.push({name, email, password});
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful!')
      navigate('/login'); //redirect to login
    }


  return (
   <div className={styles['registerContainer']}>
        <h1 className={styles['register-heading']}>Register</h1>
        <input type="text"
            className={styles.username}
            placeholder='User name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
           />
        <input 
            className={styles['email-input']} 
            type="email"
            placeholder='Email*'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        <input 
              className={styles['pass-input']} 
              type="password" 
              placeholder='Password*' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
        <p className={styles.account}>Already have an account? </p><Link to='/login' className={styles['login-link']}>Login</Link>

    </div>
  )
}
