import React from 'react'
import styles from '../styles/Login.module.css'
import {Link, useNavigate} from "react-router-dom"

export const Login: React.FC = () => {

  const navigate =  useNavigate();

  const handleLogin = () => {
    navigate('/home')
  }
  return (
    <div className={styles['loginContainer']}>
        <h1 className={styles['login-heading']}>Log in</h1>
        <input className={styles['email-input']} type="text" placeholder='Email*' required/>
        <input className={styles['pass-input']} type="password" placeholder='Password*' required /> <br />
        <button className={styles['loginBtn']} onClick={handleLogin}>Login</button>
        <p className={styles.a}>Don't have an account yet? </p><Link to='/register' className={styles['register-link']}>Register</Link>
    </div>
  )
}
