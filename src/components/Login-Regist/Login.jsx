import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/images/lg_ss.png"
import image from '../../assets/images/asset_login.png'
import style from "../../assets/css/LoginRegist.module.css"
import Navigation from "../Navigation"
import { useState } from "react"
import axios from "axios"

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate() //navigate
    // const [error, setError] = useState(false)
    // const [loading, setLoading] = useState(false)
    // const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
    const API_BASE_URL = "http://localhost:4000"

    const submitHandler = async (e) => {
        e.preventDefault()
        console.log(email, password);

        try {
            const response = await axios.post(
                `${API_BASE_URL}/auth/login`,
                { email, password },
                { withCredentials: true } //important
            )

            if(response.status === 201) {
                console.log("Login berhasil", response.data);
                navigate("/home")
            }else{
                console.log("Login failed", response.data)
            }
        } catch (error) {
            console.log("Error during login: ", error)
        }
        
    }

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
                      <h1 className={`${style['h1']} text-2xl font-bold`}>Masuk Akun</h1>
                      <p className={`${style['p']} mt-3 mb-3`}>Ruang Aman untuk Pemberdayaan dan Keadilan Perempuan</p>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2"></label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                required
                                className={`${style['form-control']} w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-#8c263b-500`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />    
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2"></label>
                            <input 
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                required
                                className={`${style['form-control']} w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-#8c263b-500`}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="text-center">
                            <button
                              type="submit"
                              className="px-6 py-2 sm-btn-primary mt-5">
                              Masuk
                            </button>
                        </div>
                    </form>
                    <div className="mt-5 text-center mb-10">
                      <small className={`${style['small']}`}>Belum Punya Akun? <Link to="/regist"><span className={`${style['small-b']}`}>Daftar</span></Link></small>
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

export default Login