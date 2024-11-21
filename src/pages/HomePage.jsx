import NavBottom from "../components/NavBottom"
import logo from '../assets/images/lg_ss.png'
import CasesSection from "../components/HomePage/CasesSection"
import style from "../assets/css/HomePage.module.css"
import EmergencyInfo from "../components/HomePage/EmergencyInfo"
import EducationSection from "../components/HomePage/EducationSection"
import {  useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


function HomePage(){

  const { userData, isLoggedin } = useSelector((state) => state.users);


 
    return (
        <>
        <div className={`${style['content-home']} wrapper-mobile`}>
        <div className={`${style['welcome-section']}`}>
        <div className={`${style.logo}`}>
          <img className={`max-w-full`} src={logo}/>
        </div>

        <div className={`${style.greetings} mt-4`}>
          <h6>Halo <span id="nama_lengkap">{userData.fullName}</span>, Bagaimana Kabarmu?</h6>
        </div>
      </div>
            <CasesSection />
            <EmergencyInfo/>
            <EducationSection/>
        </div>
        <NavBottom />
        </>
    )
}

export default HomePage