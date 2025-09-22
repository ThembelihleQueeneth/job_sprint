import React, { useState, useEffect } from 'react';
import styles from '../styles/EditJob.module.css';
import { useNavigate, useParams } from 'react-router-dom';

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

export const EditJob = () => {
  
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState('Applied');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');
  
  useEffect(() => {
    const allJobs: Job[] = JSON.parse(localStorage.getItem('jobs') || '[]');
    const jobToEdit = allJobs.find(job => job.id === Number(jobId));

    if (!jobToEdit) {
      alert('Job not found');
      navigate('/home');
      return;
    }

    setTitle(jobToEdit.title);
    setCompany(jobToEdit.company);
    setStatus(jobToEdit.status);
    setDate(jobToEdit.date || '');
    setDescription(jobToEdit.description || '');
    setLogo(jobToEdit.logo);
  }, [jobId, navigate]);

  
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

  const handleEditJob = (e: React.FormEvent) => {
    e.preventDefault();

    const allJobs: Job[] = JSON.parse(localStorage.getItem('jobs') || '[]');
    const jobIndex = allJobs.findIndex(job => job.id === Number(jobId));

    if (jobIndex === -1) {
      alert('Job not found');
      return;
    }

    allJobs[jobIndex] = {
      ...allJobs[jobIndex],
      title,
      company,
      status,
      date,
      description,
      logo,
    };

    localStorage.setItem('jobs', JSON.stringify(allJobs));
    alert('Job updated successfully!');
    navigate('/home');
  };

  return (
    <form className={styles['JobContainer']} onSubmit={handleEditJob}>
      <h1 className={styles['add-job-heading']}>Edit Job</h1>

      {logo && <img src={logo} alt="Company Logo" className={styles.logo} />}

      <br />
       <label htmlFor="
        " className={styles['label-form']}>Upload Company Logo:</label>
      <input 
        className={styles['job-input']} 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
        aria-label="Job Image"
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
        required
        aria-label='State'
      >
        <option value="">Select status...</option>
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
        aria-label="Job Date"
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
        Save Changes
      </button>
    </form>
  );
};
