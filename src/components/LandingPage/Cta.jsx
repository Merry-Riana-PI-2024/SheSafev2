import style from '../../assets/css/LandingPage.module.css'
import logo from '../../assets/images/lg_ss.png'

function Cta() {
  return (
    <>
      <div className={`${style['contact-section']}`} id="contact-section">
        <div className={`${style['contact-content']}`}>
          <div className={`${style.image}`}>
            <img className="img-fluid" src={logo} alt="" width="30%" />
          </div>
          <div className={`${style.description} my-4`}>
            <h4>Mulai Sekarang Bergabunglah Bersama Kami</h4>
            <p>
              Daftar sekarang untuk memulai perjalanan Anda menuju keadilan dan
              dukungan
            </p>
          </div>
          <a className="lg-btn-secondary" href="/views/register.html">
            Daftar Sekarang
          </a>
        </div>
      </div>
    </>
  );
}

export default Cta;
