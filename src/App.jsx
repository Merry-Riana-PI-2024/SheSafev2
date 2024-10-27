
import './App.css'
import LandingPage from './pages/LandingPage'
import Login from './components/Login-Regist/Login'
import Register from './components/Login-Regist/Register'
import AddJurnal from './pages/AddJurnal'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/regist" element={<Register />} />
      <Route path="/addJurnal" element={<AddJurnal />} />
    </Routes>

      
    </>
  )
}

export default App
