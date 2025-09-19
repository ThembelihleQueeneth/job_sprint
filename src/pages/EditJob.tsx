import React, { useState, useEffect } from 'react';
import styles from '../styles/AddJob.module.css';
import { useNavigate, useParams } from 'react-router-dom';

type Job = {
  id: number;
  title: string;
  company: string;
  status: string;
  date?: string;
  description?: string;
  logo: string; // base64
  userEmail: string;
};

export const EditJob = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState('Applied');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');
  
  useEffect(() => {
    const allJobs: Job[] = JSON.parse(localStorage.getItem('jobs') || '[]');
    const jobToEdit = allJobs.find(job => job.id === Number(id));
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
  }, [id, navigate]);

  // Convert uploaded image to base64
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
    const jobIndex = allJobs.findIndex(job => job.id === Number(id));

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

      <input 
        className={styles['job-input']} 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} placeholder='file'
      />

      {logo && <img src={logo} alt="Company Logo" style={{ width: 80, margin: '10px 0' }} />}

      <input  
        className={styles['job-input']} 
        type="text" 
        placeholder="Job Title*" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required 
      />

      <input  
        className={styles['job-input']} 
        type="text" 
        placeholder="Company Name*" 
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required 
      /> 

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
      </select>

      <input 
        className={styles['job-input']} 
        type="date" 
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder='date'
      />
      
      <input 
        className={styles['job-input']} 
        type="text" 
        placeholder="Brief Job Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className={styles['AddNewJobBtn']} type="submit">
        Edit Job
      </button>
    </form>
  );
};
