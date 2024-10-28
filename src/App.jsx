
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import Community from './pages/Community'
import DetailCom from './pages/DetailCom'
import Profile from './pages/Profile'
import Education from './pages/Education'
import DetailEdu from './pages/DetailEdu'
import AddCases from './pages/AddCases'
import Journal from './pages/Journal'
import MyJournal from './pages/MyJournal'

function App() {

  return (
    <>
    <Routes>
      {/* <Route path="/login" element={}> */}
      <Route path="/" element={<LandingPage />}/>
      <Route path="/home" element={<HomePage />}/>
      <Route path="/community" element={<Community />}/>
      <Route path="/community/detail" element={<DetailCom />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/education" element={<Education />}/>
      <Route path="/education/detail" element={<DetailEdu />}/>
      <Route path="/cases/add" element={<AddCases />}/>
      <Route path="/journal/myjournal" element={<Journal />}>
          <Route path='/journal/myjournal' element={<MyJournal />}/>
          {/* <Route path='journal/mycases' element={<MyCases/>}/> */}
      </Route>




    </Routes>
    </>
  )
}

export default App
