// import React from 'react'
import { useState } from 'react';
import { LoginNavBar } from '../components/Navbar/LoginNavBar';
import styles from '../styles/Landing.module.css';
import searchIcon from '../assets/search.svg';
import { FaEdit, FaTrash, FaEye} from "react-icons/fa";


import { Footer } from '../components/Footer/Footer';

export const Landing = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleDemoBtn = () => {
    alert('Login/Create Account to use the platform')
  }

  // Sample data for demonstration
  const demoApplications = [
    {
      id: 1,
      title: 'Software Tester',
      company: 'FNB',
      status: 'Applied',
      logo: 'https://cdn-icons-png.flaticon.com/512/5977/5977588.png',
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Google',
      status: 'Interviewed',
      logo: 'https://cdn-icons-png.flaticon.com/512/281/281764.png',
    },
    {
      id: 3,
      title: 'UX Designer',
      company: 'Microsoft',
      status: 'Applied',
      logo: 'https://cdn-icons-png.flaticon.com/512/732/732221.png',
    },
    {
      id: 4,
      title: 'Product Manager',
      company: 'Apple',
      status: 'Applied',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968885.png',
    },
    {
      id: 5,
      title: 'Data Scientist',
      company: 'Amazon',
      status: 'Rejected',
      logo: 'https://cdn-icons-png.flaticon.com/512/731/731985.png',
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      company: 'Netflix',
      status: 'Interviewed',
      logo: 'https://cdn-icons-png.flaticon.com/512/732/732228.png',
    },
    {
      id: 7,
      title: 'Backend Developer',
      company: 'Twitter',
      status: 'Applied',
      logo: 'https://cdn-icons-png.flaticon.com/512/733/733579.png',
    },
    {
      id: 8,
      title: 'Mobile Developer',
      company: 'Uber',
      status: 'Rejected',
      logo: 'https://cdn-icons-png.flaticon.com/512/5969/5969282.png',
    },
    {
      id: 9,
      title: 'QA Engineer',
      company: 'Airbnb',
      status: 'Interviewed',
      logo: 'https://cdn-icons-png.flaticon.com/512/6124/6124998.png',
    },
  ];

  const filteredApplications = demoApplications.filter(
    (app) =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <LoginNavBar/>

      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h2>Keep Track of Your Job Application</h2>
          <p>
            Stay organized and never miss an opportunity with our job
            application tracker.
          </p>
        </div>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className={styles.searchButton} onClick={handleDemoBtn}>
            <img src={searchIcon} alt="Search" />
          </button>
        </div>
      </div>

      <button className={styles.addBtn} onClick={handleDemoBtn}>Add New Job</button>

      <h4 className={styles['demo-heading']}>Demo Application</h4>
      <div className={styles["demo-grid"]}>
        {filteredApplications.map((app) => (
          <div key={app.id} className={styles["demo-card"]}>
            <img src={app.logo} alt="Company Logo" className={styles["company-logo"]} />
            <h3 className={styles["job-title"]}>
              <b>Title:</b> {app.title}
            </h3>
            <span className={styles["company-name"]}>
              <b>Company:</b> {app.company}
            </span>
           <span
  className={`${styles.status} ${styles[`status-${app.status.toLowerCase()}`]}`}
>
  <b>Status:</b> {app.status}
</span>

             <div className={styles["card-actions"]}>
            <button  aria-label="Name" type='submit' onClick={handleDemoBtn} className={styles.iconBtn} id={styles.edit}>
              <FaEdit />
            </button>
            <button  aria-label="Name" type='submit' onClick={handleDemoBtn} className={styles.iconBtn} id={styles.delete}>
              <FaTrash />
          </button>
          <button aria-label="Name" type='submit' onClick={handleDemoBtn} className={styles.iconBtn} id={styles.view}><FaEye /></button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};
