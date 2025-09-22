import './App.css'
import { useState, useEffect } from 'react'
import { Landing } from './pages/Landing'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { AddJob } from './pages/AddJob'
import { EditJob } from './pages/EditJob'
import NotFound from './pages/NotFound'
import { SpinnerLoader } from './components/Loader/SpinnerLoader'

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

function AppRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/add" element={<AddJob />} />
      <Route path="/edit/:jobId" element={<EditJob />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
