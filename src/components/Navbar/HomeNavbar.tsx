import styles from '../../styles/Navbar.module.css'
import {  useNavigate } from "react-router-dom"
import { useState } from "react"

type HomeNavBarProps = {
  name: string;
};

export const HomeNavBar = ({ name }: HomeNavBarProps) => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutBtn = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem('currentUser');
    setShowLogoutModal(false);
    navigate("/"); 
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      <nav>
        <div>
          <h3 className={styles['welcome-msg']}>Welcome back {name}</h3>
        </div>
        <div>
          <button className={styles.login} onClick={handleLogoutBtn}>Logout</button>
        </div>
      </nav>

      
      {showLogoutModal && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modal}>
            <h2>Confirm Logout</h2>
            <p>Are you sure you want to log out?</p>
            <div className={styles.modalActions}>
              <button onClick={cancelLogout} className={styles.closeBtn}>Cancel</button>
              <button onClick={confirmLogout} className={styles.deleteBtn}>Yes, Logout</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
