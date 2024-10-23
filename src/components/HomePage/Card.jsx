import style from "../../assets/css/HomePage.module.css"


function Card (){
    return (<>
           <div className={`${style['cases-card']} mx-1 `}>
            <div className={`${style['cases-user']}`}>
              <p className={`${style.username} `}>Anonim</p>
              <p>11 Oktober 2024 | 02:40pm</p>
            </div>
            <div className={`${style['cases-desc']} `}>
              <p>Saya Butuh Pertolongan: Terjebak dalam Lingkaran Kekerasan</p>
            </div>
            <button className={`${style['btn-support']} mt-2`}>100 Dukungan</button>
          </div>

    </>)
}

export default Card