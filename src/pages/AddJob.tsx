// import React from 'react'
import styles from '../styles/AddJob.module.css'

export const AddJob = () => {
  return (
    <form action="" className={styles['JobContainer']}>
      <h1 className={styles['add-job-heading']}>Add Job</h1>

     
        <input 
          className={styles['job-input']} 
          type="file" 
          accept="image/*" 
          required 
          placeholder='Choose Image'
        />
      

      <input  
        className={styles['job-input']} 
        type="text" 
        placeholder="Job Title*" 
        required 
      />

      <input  
        className={styles['job-input']} 
        type="text" 
        placeholder="Company Name*" 
        required 
      /> 
      <br />

      <select name="status" id="status" className={styles.status}>
        <option value="Applied">Applied</option>
        <option value="Rejected">Rejected</option>
        <option value="Interviewed">Interviewed</option>
      </select>
      <br />

      <input 
        className={styles['job-input']} 
        type="date" 
        placeholder="Date"
      />
      
      <input 
        className={styles['job-input']} 
        type="text" 
        placeholder="Brief Job Description"
      />

      <button className={styles['AddNewJobBtn']}>
        Add Job
      </button>
    </form>
  )
}
