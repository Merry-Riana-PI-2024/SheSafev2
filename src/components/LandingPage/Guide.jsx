import style from '../../assets/css/LandingPage.module.css'
function Guide () {
    return(
        <>
         <div className={`${style['guide-secion']}`} id="guide-section">
        <div className={`${style['guide-title']}`}>
          <h4>Bagaimana Cara Kerjanya?</h4>
        </div>

        <div className={`${style['guide-content']} my-3`}>
          <div className={`${style['guide-card']} mt-3`}>
            <div  className={`${style.title}`}>
              <h5>1. Angkat Cerita Anda</h5>
              <p>
                Simpan dan atur pengalaman Anda dengan fitur jurnal yang aman
                dan rahasia.
              </p>
            </div>
           
          </div>

          <div className={`${style['guide-card']} mt-3`}>
            <div  className={`${style.title}`}>
              <h5>2. Angkat Kesadaran</h5>
              <p>
                Setelah beberapa entri, pilih untuk memperlihatkan cerita Anda
                di beranda untuk mendapatkan dukungan dari komunitas.
              </p>
            </div>
          </div>

          <div className={`${style['guide-card']} mt-3`}>
            <div  className={`${style.title}`}>
              <h5>3. Dapatkan Bantuan</h5>
              <p>
                Akses sumber daya penting dan panduan untuk melindungi diri Anda
                dan orang lain.
              </p>
            </div>
          </div>

          <div className={`${style['guide-card']} mt-3`}>
            <div  className={`${style.title}`}>
              <h5>4. Gabung dengan Komunitas</h5>
              <p>
                Akses sumber daya penting dan panduan untuk melindungi diri Anda
                dan orang lain.
              </p>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Guide