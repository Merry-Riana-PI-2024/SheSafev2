import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { checkAuth, setLoginStatus } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import NavBottom from "../components/NavBottom";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData, isLoggedin } = useSelector((state) => state.users);
  const [profileData, setProfileData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "",
    avatar: null,
  });

  useEffect(() => {
    if (!isLoggedin) {
      dispatch(checkAuth());
    }
  }, [dispatch, isLoggedin]);

  useEffect(() => {
    if (isLoggedin) {
      const fetchProfile = async () => {
        try {
          const response = await axios.get("https://peculiar-linnet-shesafe-47ad0121.koyeb.app/profile/");
          if (response.data) {
            setProfileData(response.data.data);
            setFormData({
              fullName: response.data.data.fullName,
              email: response.data.data.email,
              gender: response.data.data.gender,
              avatar: response.data.data.avatar,
            });
          }
        } catch (error) {
          console.error("Gagal mengambil data profil:", error);
        }
      };

      fetchProfile();
    } else {
      navigate("/login");
    }
  }, [isLoggedin, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, avatar: e.target.files[0] }));
  };

  const handleEditProfile = async () => {
    if (!userData || !userData.userId) {
      console.error("User ID tidak ditemukan!");
      return;
    }

    try {
      const data = new FormData();
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("gender", formData.gender);
      if (formData.avatar) {
        data.append("avatar", formData.avatar);
      }

      const response = await axios.put(
        `https://peculiar-linnet-shesafe-47ad0121.koyeb.app/profile/${userData.userId}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data) {
        setProfileData(response.data.data);
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Gagal memperbarui profil:", error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post("https://peculiar-linnet-shesafe-47ad0121.koyeb.app/auth/logout");
      if (response.data.message === "Berhasil logout") {
        dispatch(setLoginStatus(false)); 
      }
    } catch (error) {
      console.error("Gagal logout:", error);
    }
  };
  
  useEffect(() => {
    if (!isLoggedin) {
      navigate("/login"); 
    }
  }, [isLoggedin, navigate]);

  if (!profileData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="bg-white wrapper-mobile">
        <div className="pt-10 mx-5">
          <div className="flex flex-col gap-8 justify-center items-center">
            <img
              className="w-[100px] rounded-full"
              src={profileData.avatar}
              alt="Avatar"
            />
            {isEditing ? (
              <form className="flex flex-col w-full gap-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-gray-700">Nama Lengkap</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2 mt-1"
                    placeholder="Nama Lengkap"
                  />
                </div>

                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2 mt-1"
                    placeholder="Email"
                  />
                </div>

                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-gray-700">Jenis Kelamin</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md p-2 mt-1"
                    >
                      <option value="">Pilih</option>
                      <option value="Perempuan">Perempuan</option>
                      <option value="Laki-Laki">Laki-Laki</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700">Avatar</label>
                  <input
                    type="file"
                    name="avatar"
                    onChange={handleFileChange}
                    className="w-full border border-gray-300 rounded-md p-2 mt-1"
                  />
                  <p className="text-xs text-red-500 mt-1">*Maksimum file 2MB</p>
                </div>

                <button
                  onClick={handleEditProfile}
                  className="bg-[#BA324F] text-white rounded-md px-4 py-2 mt-4"
                >
                  Simpan Perubahan
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center gap-1">
                <h6 className="text-[#BA324F] font-bold text-xl">
                  {profileData.fullName}
                </h6>
                <p className="text-[#8c8c8c] font-light text-md">{profileData.email}</p>
              </div>
            )}
          </div>

          <div className="border-2 border-[#f5f5f5] rounded-[10px] mt-10 px-5 py-2 flex gap-10 justify-between items-center">
            <div className="flex gap-4 px-3 py-3">
              <h6
                onClick={() => setIsEditing(!isEditing)}
                className="text-md text-black cursor-pointer"
              >
                Edit Profile
              </h6>
            </div>

            <div className="flex gap-4 px-3 py-3">
              <h6
                onClick={handleLogout} 
                className="text-md text-black cursor-pointer"
              >
                Keluar Akun
              </h6>
            </div>
          </div>
        </div>

        <NavBottom />
      </div>
    </>
  );
}

export default Profile;
