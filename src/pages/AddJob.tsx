import React, { useState } from 'react';
import styles from '../styles/AddJob.module.css';
import { useNavigate } from 'react-router-dom';

type Job = {
  id: number;
  title: string;
  company: string;
  status: string;
  date?: string;
  description?: string;
  logo: string; 
  userEmail: string; 
};

export const AddJob = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState('Applied');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');

  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddJob = (e: React.FormEvent) => {
    e.preventDefault();

    if (!logo) {
      alert('Please upload a company logo');
      return;
    }

    const allJobs: Job[] = JSON.parse(localStorage.getItem('jobs') || '[]');

    const newJob: Job = {
      id: Date.now(), 
      title,
      company,
      status,
      date,
      description,
      logo,
      userEmail: currentUser.email
    };

    allJobs.push(newJob);
    localStorage.setItem('jobs', JSON.stringify(allJobs));

    alert('Job added successfully!');
    navigate('/home');
  };

  return (
    <form className={styles['JobContainer']} onSubmit={handleAddJob}>
      <h1 className={styles['add-job-heading']}>Add Job</h1>

      <label htmlFor="
        " className={styles['label-form']}>Upload Company Logo:</label>
      <input 
        className={styles['job-input']} 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
        required 
        aria-label="State"
      /> <br />
      <label htmlFor="
        " className={styles['label-form']}>Enter Job Title:</label>

      <input  
        className={styles['job-input']} 
        type="text" 
        placeholder="Job Title*" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required 
      /> <br />

      <label htmlFor="
        " className={styles['label-form']}>Enter Company Name:</label>

      <input  
        className={styles['job-input']} 
        type="text" 
        placeholder="Company Name*" 
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required 
      /> <br />
      <label htmlFor="
        " className={styles['label-form']}>Choose Status:</label>

      <select 
        name="status" 
        id="status" 
        className={styles.status}
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        aria-label="State"
      >
        <option value="Applied">Applied</option>
        <option value="Rejected">Rejected</option>
        <option value="Interviewed">Interviewed</option>
      </select> <br />

      <label htmlFor="
        " className={styles['label-form']}>Enter Date:</label>

      <input 
        className={styles['job-input']} 
        type="date" 
        value={date}
        onChange={(e) => setDate(e.target.value)}
        aria-label="State"
      /> <br />
      <label htmlFor="
        " className={styles['label-form']}>Provide a Brief Description:</label>
      
      <input 
        className={styles['job-input']} 
        type="text" 
        placeholder="Brief Job Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className={styles['AddNewJobBtn']} type="submit">
        Add Job
      </button>
    </form>
  );
};
