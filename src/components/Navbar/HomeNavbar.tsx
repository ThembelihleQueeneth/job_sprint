import styles from '../../styles/Navbar.module.css'
import {Link} from "react-router-dom"
type HomeNavBarProps = {
  name: string;
};


export const HomeNavBar = ({ name }: HomeNavBarProps) => {
    const handleLogoutBtn = () =>{
        localStorage.removeItem('currentUser');
        alert('Are you sure you want to logout???')
    }
  return (
    <nav>
        <div>
            <h3 className={styles['welcome-msg']}>Welcome back {name}</h3>
        </div>
        <div>
          <Link to="/">
            <button title='ff' className={styles.login} onClick={handleLogoutBtn}>Logout</button>
          </Link>
            
        </div>
        
    </nav>
  )
}
