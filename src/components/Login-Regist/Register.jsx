import { Link } from "react-router-dom"
import logo from "../../assets/images/lg_ss.png"
import image from '../../assets/images/asset_login.png'
import style from "../../assets/css/LoginRegist.module.css"
import Navigation from "../Navigation"

function Register() {
    return(
        <>
        <div className="wrapper-mobile">
          <div className="container mx-auto flex justify-center items-center min-h-screen p-4">
            <div className="w-full max-w-lg">
              <Navigation />
                <div className="flex justify-center mb-6 mt-36">
                    <img src={logo} alt="Logo" className="w-32" />
                </div>
                <div className="text-center mb-6">
                    <h1 className={`${style['h1']} text-3xl font-bold`}>Daftar Akun</h1>
                    <p className={`${style['p']} mt-3 mb-3`}>Ruang Aman untuk Pemberdayaan dan Keadilan Perempuan</p>
                </div>
                <form action="">
                    <div className="mb-4">
                        <label htmlFor="nama" className="label">Nama Lengkap</label>
                        <input
                        type="text"
                        id="nama"
                        placeholder="Nama Lengkap"
                        className={`${style['form-control']} w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-#8c263b-500`}
                        required
                      />   
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="label">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        className={`${style['form-control']} w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-#8c263b-500`}
                        required
                      />
                    </div>
                    <div className="flex gap-4 mb-4">
                      <div className="w-1/2">
                        <label htmlFor="gender" className="label">Jenis Kelamin</label>
                        <select
                          id="gender"
                          className={`${style['form-control']} w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-#8c263b-500`}
                          required
                          defaultValue="Pilih"
                        >
                            <option disabled>Pilih</option>
                            <option>Perempuan</option>
                            <option>Laki-laki</option>
                        </select>
                      </div>
                      <div className="w-1/2">
                        <label htmlFor="ttl" className="label">Tanggal Lahir</label>
                        <input
                          type="date"
                          id="ttl"
                          className={`${style['form-control']} w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-#8c263b-500`}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-1">
                      <label htmlFor="identitas" className="label">Bukti Identitas</label>
                      <input
                          type="file"
                          id="identitas"
                          className={`${style['form-control']} w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-#8c263b-500`}
                          required
                      />
                    </div>
                    <small className={`${style['small']}`}>**Maximum file 2mb</small>
                    <div className="mb-4 mt-3">
                      <label htmlFor="password" className="label">Password</label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className={`${style['form-control']} w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-#8c263b-500`}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="password-confirm" className="label">Konfirmasi Password</label>
                      <input
                        type="password"
                        id="password-confirm"
                        placeholder="Konfirmasi Password"
                        className={`${style['form-control']} w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-#8c263b-500`}
                        required
                      />
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="px-6 py-2 sm-btn-primary mt-5"
                      >Daftar
                      </button>
                    </div>
                </form>
                <div className="mt-2 text-center mb-10">
                  <small className={`${style['small']}`}>Sudah Punya Akun? <Link to="/login"><span className={`${style['small-b']}`}>Masuk</span></Link></small>
                </div>
            </div>
          </div>
          <div className={`${style['hero-img']} mt-5`}>
            <img className={`${style['img-1']} img-fluid`} src={image} />
          </div>
        </div>
        </>
    )
}

export default Register