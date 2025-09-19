import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css'


const NotFound: React.FC = () => {
  return (
    <div className={styles['not-found-container']}>
      <div className={styles.container}>
        <h1 >404</h1>
        <h2 >Page Not Found</h2>
        <p >
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
