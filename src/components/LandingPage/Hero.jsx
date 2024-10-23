import style from '../../assets/css/LandingPage.module.css'
import image from '../../assets/images/asset_login.png'

function Hero() {
  return (
    <>
      <div className={`${style['hero-section']}`} id="hero-section">
        <div className={`${style['hero-title']} `}>
          <h4 className='text-xl'>Selamat Datang di SheSafe</h4>
          <h6>Ruang Aman untuk Pemberdayaan dan Keadilan Perempuan</h6>
        </div>

        <div className={`${style['hero-desc']}`}>
          <p>
            Kami memberdayakan perempuan dengan menyediakan platform aman untuk
            mendokumentasikan, membagikan, dan mengangkat kasus kekerasan serta
            pelecehan, memastikan setiap suara didengar dan diperhatikan.
          </p>
        </div>

        <div className={`${style['hero-btn']} mt-4`}>
          <a href="/views/register.html" className="lg-btn-primary">
            Daftar Sekarang
          </a>
        </div>

        <div className={`${style['hero-img']} mt-5`}>
          <img className={`${style['img-1']} img-fluid`} src={image} />
        </div>
      </div>
    </>
  );
}

export default Hero;
