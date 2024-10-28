
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import Community from './pages/Community'

function App() {

  return (
    <>
    <Routes>
      {/* <Route path="/login" element={}> */}
      <Route path="/" element={<LandingPage />}/>
      <Route path="home" element={<HomePage />}/>
      <Route path="community" element={<Community />}/>


    </Routes>
    </>
  )
}

export default App
