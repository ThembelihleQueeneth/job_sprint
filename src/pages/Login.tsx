import React, {useState} from 'react'
import styles from '../styles/Login.module.css'
import {Link, useNavigate} from "react-router-dom"


type User = {
  name: string;
  email: string;
  password: string;
};
//
// 2
// : 
// {name: "abc", email: "abc@gmail.com", password: "12345"}
export const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    // find a matching user
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      alert(`Welcome back, ${user.name}!`);
      navigate('/home');
    } else {
      alert('Invalid email or password');
    }
  };
  return (
    <div className={styles['loginContainer']}>
        <h1 className={styles['login-heading']}>Log in</h1>
        <input
        className={styles['email-input']}
        type="email"
        placeholder="Email*"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

        <input
        className={styles['pass-input']}
        type="password"
        placeholder="Password*"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
        <button className={styles['loginBtn']} onClick={handleLogin}>
        Login
      </button>
        <p className={styles.a}>Don't have an account yet? </p><Link to='/register' className={styles['register-link']}>Register</Link>
    </div>
  )
}
