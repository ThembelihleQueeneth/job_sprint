import './App.css'
import { Landing } from './pages/Landing'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { AddJob } from './pages/AddJob'
import { EditJob } from './pages/EditJob'
import NotFound from './pages/NotFound'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/home" element= {<Home/>} />
        <Route path="*" element={<NotFound />} />
         <Route path="/add" element= {<AddJob/>} />
         <Route path="/edit/:jobId" element={<EditJob />} />
      </Routes>
    </Router>
  )
}

export default App
