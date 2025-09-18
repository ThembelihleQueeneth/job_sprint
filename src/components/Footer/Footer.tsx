import React from 'react'
import facebookIcon from '../../assets/facebook.svg'
import youtube from '../../assets/youtube.svg'
import twitter from '../../assets/x-twitter.svg'
import styles from '../../styles/Footer.module.css'

export const Footer = () => {
  return (
   <footer>

    <div className={styles.icons}>
      <img src={facebookIcon} alt="" />
      <img src={youtube} alt="" />
      <img src={twitter} alt="" />
    </div>
    
            <p>Copyright 2025 Powered by Job Sprint. All Rights Reserved.</p>
   </footer>
  )
}
