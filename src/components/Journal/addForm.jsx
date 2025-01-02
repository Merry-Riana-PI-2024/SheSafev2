import style from "../../assets/css/AddJurnal.module.css";
import image from "../../assets/images/asset_login.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function AddForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    category: "",
    description: "",
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/category/`, {
          withCredentials: true,
        });
        console.log("Berhasil fetching category: ", response.data);
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching category: ", error);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}/journal`, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log("Berhasil tambah jurnal: ", response.data);

      const result = await Swal.fire({
        title: "Jurnal Berhasil Ditambahkan",
        text: "Jurnal Anda telah berhasil ditambahkan.",
        icon: "success",
        confirmButtonText: "OK",
      });

      if (result.isConfirmed) {
        // Menampilkan SweetAlert lagi sebelum navigasi ke halaman edit
        const editConfirmation = await Swal.fire({
          title: "Apakah Anda ingin melanjutkan ke halaman edit?",
          text: "Anda bisa menambahkan Lampiran di sana.",
          icon: "info",
          showCancelButton: true,
          confirmButtonText: "Ya, Edit Sekarang",
          cancelButtonText: "Tidak",
          reverseButtons: true,
        });

        if (editConfirmation.isConfirmed) {
          if (response.data.savedJournal && response.data.savedJournal._id) {
            const id = response.data.savedJournal._id;
            navigate(`/editJurnal/${id}`);
          } else {
            console.error("ID tidak ditemukan dalam response data.");
          }
        } else {
          navigate("/journal");
        }
      }
    } catch (error) {
      console.error("Error adding journal: ", error);
    }
  };

  return (
    <>
      <div className=" mx-auto flex justify-center items-center p-4">
        <div className="w-full max-w-lg">
      
          <form onSubmit={handleSubmit}>
            <div className="mb-1">
              <label htmlFor="judul" className="text-sm font-bold">
                Judul Jurnal
              </label>
              <input
                type="text"
                name="title"
                placeholder="Masukkan Judul Jurnal Anda"
                className={`${style["form-control"]} mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-#8c263b-500`}
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <small className={`${style["small"]}`}>
              **Pilih judul yang mencerminkan isi jurnal dengan benar
            </small>
            <small className={`${style["small"]}`}>
              **Maksimal 100 karakter
            </small>
            <div className="flex gap-4 mb-4 mt-3">
              <div className="w-1/2">
                <label
                  htmlFor="tglKejadian1"
                  className={`${style["form-block"]} text-sm font-bold`}>
                  Tanggal Kejadian
                </label>
                <div className="flex space-x-9 mt-1">
                  <input
                    type="date"
                    name="startDate"
                    className={`${style["form-control"]} w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-#8c263b-500`}
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                  />
                  <h4 className="mx-5">
                    <b>-</b>
                  </h4>
                  <input
                    type="date"
                    name="endDate"
                    className={`${style["form-control"]} w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-#8c263b-500`}
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="text-sm font-bold">
                Klasifikasi Kasus
              </label>
              <select
                name="category"
                className={`${style["form-control"]} mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-#8c263b-500`}
                value={formData.category}
                onChange={handleChange}
                required>
                <option disabled value="">
                  Pilih Klasifikasi
                </option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-1">
              <label htmlFor="description" className="text-sm font-bold">
                Deskripsi Kejadian
              </label>
              <textarea
                name="description"
                placeholder="Deskripsikan kejadian yang anda alami"
                className={`${style["form-control"]} mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-#8c263b-500`}
                rows="4"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <small className={`${style["small"]}`}>
              **Hindari menggunakan nama asli atau informasi pribadi orang lain
              tanpa izin
            </small>

            <div className="flex justify-center">
              <button type="submit" className="px-6 py-2 sm-btn-primary mt-10">
                Buat Jurnal
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={`${style["hero-img"]} mt-5`}>
        <img className={`${style["img-1"]} img-fluid`} src={image} />
      </div>
    </>
  );
}

export default AddForm;
