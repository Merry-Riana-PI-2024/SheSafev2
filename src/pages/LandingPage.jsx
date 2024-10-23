import Navigation from "../components/Navigation"
import style from '../assets/css/LandingPage.module.css'
import Hero from "../components/LandingPage/Hero"
import Guide from "../components/LandingPage/Guide"
import Benefits from "../components/LandingPage/Benefits"
import Cta from "../components/LandingPage/Cta"
import Footer from "../components/Footer"

function LandingPage () {
    return (
        <>
        <div className={`${style['welcome-content']} wrapper-mobile`}>

     
        <Navigation />
        <Hero />
        <Guide />
        <Benefits />
        <Cta />
        <Footer />
        </div>
        </>
    )
}

export default LandingPage