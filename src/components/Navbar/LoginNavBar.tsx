import { Navbar } from './Navbar'
import styles from '../../styles/Navbar.module.css'
import {Link} from "react-router-dom"

export const LoginNavBar = () => {
  return (
    <>
    <Navbar />
    <nav>
        <div>
            <h2>Create an Account to start tracking your job applications</h2>
        </div>
        <div>
          <Link to="/login">
            <button className={styles.login}>Login/Create profile</button>
          </Link>
            
        </div>
        
    </nav>
    </>
  )
}
