import React, { useState } from 'react';
import '../styles/JobTracker.css';

const JobTracker = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample data for demonstration
  const demoApplications = [
    {
      id: 1,
      title: "Software Tester",
      company: "FNB",
      status: "Applied",
      logo: "https://cdn-icons-png.flaticon.com/512/5977/5977588.png"
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Google",
      status: "Interview",
      logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png"
    },
    {
      id: 3,
      title: "UX Designer",
      company: "Microsoft",
      status: "Offer",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png"
    },
    {
      id: 4,
      title: "Product Manager",
      company: "Apple",
      status: "Applied",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968885.png"
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "Amazon",
      status: "Rejected",
      logo: "https://cdn-icons-png.flaticon.com/512/731/731985.png"
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "Netflix",
      status: "Interview",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732228.png"
    },
    {
      id: 7,
      title: "Backend Developer",
      company: "Twitter",
      status: "Applied",
      logo: "https://cdn-icons-png.flaticon.com/512/733/733579.png"
    },
    {
      id: 8,
      title: "Mobile Developer",
      company: "Uber",
      status: "Offer",
      logo: "https://cdn-icons-png.flaticon.com/512/5969/5969282.png"
    },
    {
      id: 9,
      title: "QA Engineer",
      company: "Airbnb",
      status: "Interview",
      logo: "https://cdn-icons-png.flaticon.com/512/6124/6124998.png"
    }
  ];

  const filteredApplications = demoApplications.filter(app => 
    app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="job-tracker-container">
      <div className="content">
        <div className="textContainer">
          <h2>Keep Track of Your Job Applications</h2>
          <p>Stay organized and never miss an opportunity with our job application tracker.</p>
        </div>
        <div className="searchContainer">
          <input 
            type="text" 
            placeholder="Search applications..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="searchButton" >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      
      <h4 className="demo-heading">Demo Applications</h4>
      
      <div className="demo-grid">
        {filteredApplications.map(app => (
          <div key={app.id} className="demo-card">
            <img src={app.logo} alt="Company Logo" className="company-logo" />
            <h3 className="job-title"><b>Title:</b> {app.title}</h3>
            <span className="company-name"><b>Company:</b> {app.company}</span>
            <span className={`status status-${app.status.toLowerCase()}`}>
              <b>Status:</b> {app.status}
            </span>
            <button className="detailsBtn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobTracker;