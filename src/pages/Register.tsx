import React from 'react'
import styles from '../styles/Register.module.css'
import {Link} from "react-router-dom"

export const Register = () => {
  return (
   <div className={styles['registerContainer']}>
        <h1 className={styles['register-heading']}>Register</h1>
        <input type="text" className={styles.username} placeholder='User name' />
        <input className={styles['email-input']} type="text" placeholder='Emain*' required/>
        <input className={styles['pass-input']} type="password" placeholder='Password*' required />
        <p className={styles.account}>Already have an account? </p><Link to='/login' className={styles['login-link']}>Login</Link>

    </div>
  )
}
