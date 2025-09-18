import React from 'react'
import styles from '../styles/Login.module.css'
import {Link} from "react-router-dom"

export const Login = () => {
  return (
    <div className={styles['loginContainer']}>
        <h1 className={styles['login-heading']}>Log in</h1>
        <input className={styles['email-input']} type="text" placeholder='Emain*' required/>
        <input className={styles['pass-input']} type="password" placeholder='Password*' required />
        <p className={styles.account}>Don't have an account yet? </p><Link to='/register' className={styles['register-link']}>Register</Link>

    </div>
  )
}
