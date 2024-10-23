import style from '../../assets/css/LandingPage.module.css'
import image from '../../assets/images/asset_2.png'

function Benefits() {
  return (
    <>
      <div className={`${style['benefits-section']}`} id="advantages-section">
        <div className={`${style['benefits-title']}`}>
          <h4>Mengapa Pilih Kami?</h4>
        </div>

        <div className={`${style['benefits-content']} mt-3`}>
          <div className={`${style['benefits-card']} my-2`}>
            <div className={`${style.title}`}>
              <h5>1. Kerahasiaan Dijamin</h5>
              <p>Data Anda dilindungi dengan enkripsi terbaik.</p>
            </div>
          </div>

          <div className={`${style['benefits-card']} my-2`}>
            <div className={`${style.title}`}>
              <h5>2. Dukungan Kuat</h5>
              <p>Komunitas kami siap mendukung dan memperkuat suara Anda.</p>
            </div>
          </div>

          <div className={`${style['benefits-card']} my-2`}>
            <div className={`${style.title}`}>
              <h5>3. Dukungan Nyata</h5>
              <p>Komunitas kami siap mendukung dan memperkuat suara Anda.</p>
            </div>
          </div>
          <div className={`${style['benefits-img']}`}>
            <img className={`${style['img-fluid','img-2']}`} src={image} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Benefits;
