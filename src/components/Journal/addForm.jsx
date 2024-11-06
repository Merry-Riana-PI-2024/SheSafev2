// import { Link } from "react-router-dom"
import style from "../../assets/css/AddJurnal.module.css"
import image from '../../assets/images/asset_login.png'
import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function AddForm() {
  const navigate = useNavigate()
  const API_BASE_URL = "http://localhost:4000"
  
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    category: "",
    description: "",
    file: null,
  })

  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/category/`,
          {withCredentials: true}
        )
        console.log("Berhasil fetching category: ", response.data)
        setCategories(response.data.data)
      } catch (error) {
        console.error("Error fetching category: ", error)
      }
    }
    
    fetchCategories()
  }, [])

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    //prepare form data untuk request POST
    const data = new FormData()
    data.append("title", formData.title)
    data.append("startDate", formData.startDate)
    data.append("endDate", formData.endDate)
    data.append("category", formData.category)
    data.append("description", formData.description)
    if(formData.file){
      data.append("file", formData.file)
    }

    try {
      await axios.post(
        `${API_BASE_URL}/journal/`,
        data, //senddata
        { 
          headers: { "Content-Type": "multipart/form-data" }, //content-type untuk form
          withCredentials: true, //untuk memastikan cookie dikirim
        }
      )
      console.log("berhasil add journal: ", data)
      navigate("/journal") //redirect ke journal page kalau berhasil submit
    } catch (error) {
      console.error("error add journal: ", error)
    }

  }



    return(
        <>
        
        <div className="container mx-auto flex justify-center items-center min-h-screen p-4">
                <div className="w-full max-w-lg">
                    <div className="text-center mb-10 gap-4 flex cols-2 justify-center">
                    <button onClick={() => navigate(-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="5rem" viewBox="0 0 12 24">
                            <path fill="#8c263b" fillRule="evenodd" d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z" />
                        </svg>
                    </button>
                        <h1 className={`${style['h1']} font-bold`}>Formulir Jurnal Baru</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-1">
                            <label htmlFor="judul" className="text-sm font-bold">Judul Jurnal</label>
                            <input
                            type="text"
                            id="title"
                            placeholder="Masukkan Judul Jurnal Anda"
                            className={`${style['form-control']} mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-#8c263b-500`}
                            value={formData.title}
                            onChange={handleChange}
                            required
                          />   
                        </div>
                        <small className={`${style['small']}`}>**Pilih judul yang mencerminkan isi jurnal dengan benar</small>
                        <small className={`${style['small']}`}>**Maksimal 100 karakter</small>
                        <div className="flex gap-4 mb-4 mt-3">
                          <div className="w-1/2">
                            <label htmlFor="tglKejadian1" className={`${style['form-block']} text-sm font-bold`}>Tanggal Kejadian</label>
                            <div className="flex mt-1">
                                <div className="cols-5">
                                    <input
                                      type="date"
                                      id="startDate"
                                      className={`${style['form-control']} w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-#8c263b-500`}
                                      value={formData.startDate}
                                      onChange={handleChange}
                                      required
                                    />
                                </div>
                                <div className="px-5 flex justify-center">
                                    <h4><b>-</b></h4>
                                </div>
                                <div className="cols-5">
                                    <input
                                      type="date"
                                      id="endDate"
                                      className={`${style['form-control']} w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-#8c263b-500`}
                                      value={formData.endDate}
                                      onChange={handleChange}
                                      required
                                    />
                                </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <label htmlFor="category" className="text-sm font-bold">Klasifikasi Kasus</label>
                            <select
                              id="category"
                              className={`${style['form-control']} mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-#8c263b-500`}
                              value={formData.category}
                              onChange={handleChange}
                              required
                            >
                                <option disabled value="">Pilih Klasifikasi</option>
                                {categories.map((cat) => (
                                  <option key={cat._id} value={cat._id}>{cat.name}</option>
                                ))}  
                            </select>
                        </div>
                        <div className="mb-1">
                          <label htmlFor="description" className="text-sm font-bold">Deskripsi Kejadian</label>
                          <textarea
                            id="description"
                            placeholder="Deskripsikan kejadian yang anda alami"
                            className={`${style['form-control']} mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-#8c263b-500`}
                            rows="4"
                            value={formData.description}
                            onChange={handleChange}
                            required>
                          </textarea>
                        </div>
                        <small className={`${style['small']}`}>**Hindari menggunakan nama asli atau informasi pribadi orang lain tanpa izin</small>
                        <div className="mb-1 mt-3">
                          <label htmlFor="file" className="text-sm font-bold">Lampirkan Bukti (Optional)</label>
                          <input
                            type="file"
                            id="file"
                            onChange={handleFileChange}
                            className={`${style['form-control']} mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-#8c263b-500`}
                            
                          />
                        </div>
                        <small className={`${style['small']}`}>**Anda dapat melampirkan gambar, video, atau dokumen pendukung </small>
                        <small className={`${style['small']}`}>**Format yang didukung: JPG, PNG, MP4, PDF</small>
                        <small className={`${style['small']}`}>**Maksimal file 10MB</small>
                        <div className="flex justify-center">
                          <button
                            type="submit"
                            className="px-6 py-2 sm-btn-primary mt-10"
                          >Simpan Jurnal
                          </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={`${style['hero-img']} mt-5`}>
                <img className={`${style['img-1']} img-fluid`} src={image} />
            </div>
        </>
    )
}

export default AddForm