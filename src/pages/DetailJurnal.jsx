import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const DetailJurnal = () => {
  const navigate = useNavigate();
  // const API_BASE_URL = "http://localhost:4000"
  const { id } = useParams(); //get id dari route
  const [data, setData] = useState(null);
  const [file, setFile] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/journal/${id}`, {
          withCredentials: true,
        });
        console.log("Berhasil fetch journal id: ", id);
        setData(response.data.findJournal);
      } catch (e) {
        console.log("Error fetching detail journal ", e);
      }
    };
    fetchData();
  }, [id]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Anda yakin?",
      text: "Jurnal ini akan dihapus.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.delete(`${API_BASE_URL}/journal/${id}`, {
          withCredentials: true,
        });
        Swal.fire("Dihapus!", "Jurnal Anda telah dihapus.", "success");
        console.log("berhasil hapus journal ", id, response);
        navigate("/journal");
      } catch (error) {
        console.error("error deleting journal: ", error);
        Swal.fire("Gagal!", "Gagal menghapus jurnal.", "error");
      }
    }
  };

  const handleEdit = async () => {
    const result = await Swal.fire({
      title: "Anda yakin?",
      text: "Anda akan mengedit jurnal ini.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Edit",
      cancelButtonText: "Batal",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      window.location.href = `/editJurnal/${data._id}`;
    }
  };

  const fetchFileData = async () => {
    if (!id) return; // avoid fetching if id is undefined
    try {
      const fileResponse = await axios.get(
        `${API_BASE_URL}/journal/file/${id}`,
        {
          withCredentials: true,
        }
      );
      const data = fileResponse.data.data;

      if (Array.isArray(data)) {
        setFile(data);
      } else {
        console.log("File data is not an array", data.file);
        setFile([]);
      }
    } catch (error) {
      console.error("Error fetching file data: ", error);
      setFile([]);
    }
  };

  //getfile
  useEffect(() => {
    fetchFileData();
  }, [id]);

  if (!data) return <div>Tidak ada data..</div>;

  return (
    <div className="bg-white pt-10 wrapper-mobile ">
      <div className="flex items-center px-5 justify-between mb-8">
        <button onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none">
            <path
              d="M19.044 4.668L8.68001 15.3C8.49798 15.4868 8.3961 15.7372 8.3961 15.998C8.3961 16.2588 8.49798 16.5093 8.68001 16.696L19.044 27.332C19.1288 27.4191 19.2302 27.4883 19.3422 27.5356C19.4541 27.5828 19.5745 27.6072 19.696 27.6072C19.8176 27.6072 19.9379 27.5828 20.0499 27.5356C20.1618 27.4883 20.2632 27.4191 20.348 27.332C20.5225 27.1534 20.6201 26.9137 20.6201 26.664C20.6201 26.4143 20.5225 26.1746 20.348 25.996L10.602 15.998L20.348 6.002C20.5219 5.82351 20.6192 5.58418 20.6192 5.335C20.6192 5.08583 20.5219 4.8465 20.348 4.668C20.2632 4.58092 20.1618 4.5117 20.0499 4.46444C19.9379 4.41717 19.8176 4.39282 19.696 4.39282C19.5745 4.39282 19.4541 4.41717 19.3422 4.46444C19.2302 4.5117 19.1288 4.58092 19.044 4.668Z"
              fill="#BA324F"
            />
          </svg>
        </button>
        <h2 className="text-xl font-medium">Detail Jurnal</h2>
        <div></div>
      </div>

      <div className="flex w-full px-5 mb-2 py-5 justify-end items-center  ">
        <div className="flex gap-2 ">
          <button
            onClick={() => handleDelete(data._id)}
            className="flex gap-2 items-center text-[#BA324F] hover:text-red-700   px-3 py-1 rounded border border-red-600">
            <Icon
              icon="mi:delete"
              width="24"
              height="24"
              style={{ color: "#BA324F" }}
            />{" "}
            Hapus
          </button>
          {/* <Link to={`/editJurnal/${data._id}`}> */}
          <button
            onClick={() => handleEdit(data._id)}
            className="flex gap-2 items-center text-[#04395E] hover:text-blue-700  px-3 py-1 rounded border border-[#04395E]">
            <Icon
              icon="tabler:edit"
              width="24"
              height="24"
              style={{ color: "#04395E" }}
            />
            Edit
          </button>
          {/* </Link> */}
        </div>
      </div>

      <div
        className={`flex flex-col gap-4 mx-5 mb-6 px-2 py-3 border-2 border-[#f5f5f5] rounded-[5px]  `}>
        <div className={`flex justify-between items-center`}>
          <h6
            className={`font-bold bg-[#F8EBED] px-3 py-2 rounded-[10px] text-md text-[#BA324F]`}>
            # {data.category.name}
          </h6>
          <div className="text-gray-500  p-2 rounded text-center text-sm">
            {new Date(data.created).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
        </div>

        <div className={`flex flex-col  justify-between gap-4`}>
          <h4 className="font-semibold mb-1 text-[#BA324F]">
            Tanggal Kejadian
          </h4>
          <div className="flex items-center gap-2 ">
            <div
              className="bg-gray-100 text-gray-700 p-2 rounded text-center text-sm"
              style={{ width: "100%", fontSize: "14px" }}>
              {new Date(data.startDate).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
            <span>-</span>
            <div
              className="bg-gray-100 text-gray-700 p-2 rounded text-center text-sm"
              style={{ width: "100%", fontSize: "14px" }}>
              {new Date(data.endDate).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
          </div>
        </div>

        <div className={`flex flex-col gap-2`}>
          <h4 className="font-semibold mb-1 text-[#BA324F]">Judul Jurnal :</h4>
          <h3 className="font-semibold text-lg">{data.title}</h3>
        </div>

        <div className={`flex flex-col gap-2`}>
          <h4 className="font-semibold mb-1 text-[#BA324F]">
            Ringkasan Kejadian :
          </h4>
          <p className="text-gray-500 ">{data.description}</p>
        </div>

        <div className={`flex flex-col gap-4`}>
          <h4 className="font-semibold mb-1 text-[#BA324F]">
            Lampiran Bukti :
          </h4>
          <table className="w-full mb-6 border rounded mt-3">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">File</th>
              </tr>
            </thead>
            <tbody>
              {file && file.length === 0 ? (
                <tr>
                  <td className="border px-4 py-2 text-center" colSpan="2">
                    No files available
                  </td>
                </tr>
              ) : (
                file.map((item) => (
                  <tr key={item._id}>
                     <td className="border px-4 py-2 text-center cursor-pointer flex flex-col gap-2 justify-center items-center">
  {(() => {
    if (item.file.endsWith(".jpg") || item.file.endsWith(".jpeg") || item.file.endsWith(".png")) {
      // Jika file adalah gambar (jpg, jpeg, png)
      return (
        <>
          <img
            src={item.file}
            alt="Uploaded file"
            className="w-[100px] h-[100px] object-cover"
          />
          <a target="_blank" href={item.file}>
          {item.file.split('/').pop()}          </a>
        </>
      );
    } else if (item.file.endsWith(".mp4") || item.file.endsWith(".mov")) {
      // Jika file adalah video (mp4, mov)
      return (
        <>
          <video
            controls
            className="w-[100px] h-[100px] object-cover"
          >
            <source src={item.file} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <a target="_blank" href={item.file}>
          {item.file.split('/').pop()}          </a>
        </>
      );
    } else if (item.file.endsWith(".mp3")) {
      // Jika file adalah audio (mp3)
      return (
        <>
          <audio
            controls
            className="w-[100px] h-[100px]"
          >
            <source src={item.file} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <a target="_blank" href={item.file}>
          {item.file.split('/').pop()}          </a>
        </>
      );
    } else if (item.file.endsWith(".pdf")) {
      // Jika file adalah PDF
      return (
        <>
          <a
            href={item.file}
            target="_blank"
            className="text-blue-500 underline"
          >
            {item.file.split('/').pop()}  
          </a>
        </>
      );
    } else {
      return (
        <a target="_blank" href={item.file}>
 {item.file.split('/').pop()}        </a>
      );
    }
  })()}
</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailJurnal;
