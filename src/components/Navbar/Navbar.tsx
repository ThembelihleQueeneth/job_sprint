import React from 'react'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <>
    <div className={styles.container}>
        <h1>Job Sprint</h1>
    </div>
    <nav>
        <div>
            <h2>Create an Account to browse jobs</h2>
        </div>
        <div>
            <button>Login/Create profile</button>
        </div>
        
        
    </nav>
    </>
  )
}
