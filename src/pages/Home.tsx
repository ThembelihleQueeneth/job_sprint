import { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { HomeNavBar } from '../components/Navbar/HomeNavBar';
import styles from '../styles/Home.module.css'
import searchIcon from '../assets/search.svg';
import { Footer } from '../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from "react-icons/fa";

type Job = {
  id: number;
  title: string;
  company: string;
  status: string;
  logo: string;
  userEmail: string; 
};

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState<Job[]>([]);
  const navigate = useNavigate();

 
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  
  useEffect(() => {
   
    const allJobs: Job[] = JSON.parse(localStorage.getItem('jobs') || '[]');
    const userJobs = allJobs.filter(job => job.userEmail === currentUser.email);
    setJobs(userJobs);
  }, [currentUser.email]);

  const handleAddBtn = () => {
    navigate('/add');
  };

  const handleEditBtn = (jobId: number) => {
    navigate(`/edit/${jobId}`);
  };

  const handleDeleteBtn = (jobId: number) => {
  const confirmed = window.confirm('Are you sure you want to delete this job?');
  if (!confirmed) return;

  const allJobs: Job[] = JSON.parse(localStorage.getItem('jobs') || '[]');
  const updatedJobs = allJobs.filter(job => job.id !== jobId);
  localStorage.setItem('jobs', JSON.stringify(updatedJobs));
  setJobs(updatedJobs.filter(job => job.userEmail === currentUser.email));
};


  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <HomeNavBar name={currentUser.name || 'User'} />



      <div className={styles.content}>
        <div className={styles.textContainer}>
          
          <h2>Keep Track of Your Job Applications</h2>
          <p>Stay organized and never miss an opportunity with our job application tracker.</p>
        </div>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className={styles.searchButton}>
            <img src={searchIcon} alt="Search" />
          </button>
        </div>
      </div>

      <button className={styles.addBtn} onClick={handleAddBtn}>Add New Job</button>
      

      <h4 className={styles['demo-heading']}>Recent Applications</h4>

      <div className={styles["demo-grid"]}>
        {filteredJobs.length === 0 ? (
          <p>No applications found.</p>
        ) : (
          filteredJobs.map((job) => (
            <div key={job.id} className={styles["demo-card"]}>
              <img src={job.logo} alt="Company Logo" className={styles["company-logo"]} />
              <h3 className={styles["job-title"]}><b>Title:</b> {job.title}</h3>
              <span className={styles["company-name"]}><b>Company:</b> {job.company}</span>
             <span
                className={`${styles.status} ${styles[`status-${job.status.toLowerCase()}`]}`}> <b>Status:</b> {job.status}
              </span>

              
              <div className={styles["card-actions"]}>
                <button onClick={() => handleEditBtn(job.id)} className={styles.iconBtn} id={styles.edit}>
                  <FaEdit />
                </button>
                <button onClick={() => handleDeleteBtn(job.id)} className={styles.iconBtn} id={styles.delete}>
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <Footer />
    </>
  );
};
