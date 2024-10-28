
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import Community from './pages/Community'
import DetailCom from './pages/DetailCom'

function App() {

  return (
    <>
    <Routes>
      {/* <Route path="/login" element={}> */}
      <Route path="/" element={<LandingPage />}/>
      <Route path="home" element={<HomePage />}/>
      <Route path="community" element={<Community />}/>
      <Route path="community/detail" element={<DetailCom />}/>



    </Routes>
    </>
  )
}

export default App
