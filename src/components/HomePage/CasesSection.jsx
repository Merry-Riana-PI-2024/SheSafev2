import style from "../../assets/css/HomePage.module.css"
import Card from "./Card"
function CasesSection (){
    return (<>
      <div className={`${style['cases-section']}`}>
        <div className={`${style['cases-heading']}`}>
          <h4 className={`text-xl`}>Cerita Perempuan</h4>
          <a href="">Selengkapnya</a>
        </div>

        <div className={`${style['cases-info']} mt-2`}>
          <p>
            Lihat kisah nyata dari para perempuan pemberani. Dukung mereka
            dengan memberikan semangat atau bagikan pengalamanmu sendiri
          </p>
        </div>

        <div className={`${style['cases-content']} my-3`}>
            <Card />
        </div>
      </div>
    </>)
}

export default CasesSection