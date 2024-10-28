import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { useNavigate } from "react-router-dom";

const DetailJurnal = () => {
  const navigate = useNavigate();
  const journalData = {
    date: "10/28/2024",
    judul: "Hidup dalam Bayang-Bayang : Kekerasan yang Saya Hadapi",
    deskripsi:
      "Dalam jurnal ini, saya menceritakan pengalaman saya menghadapi kekerasan dalam rumah tangga yang semakin tak tertahankan. Setiap harinya, rasa takut dan kecemasan menguasai hidup saya, namun saya masih mencari cara untuk bisa bertahan",
    tanggalKejadian: {
      mulai: "2024-10-25",
      akhir: "2024-10-31",
    },
    klasifikasi: "Kekerasan Verbal",
    kronologi:
      "Saya sering mengalami kekerasan verbal yang diberikan oleh sekelompok pria sejak saya pindah rumah",
    lampiran: [
      { namaFile: "Nama File 1", filePath: "/path/to/file1" },
      { namaFile: "Nama File 2", filePath: "/path/to/file2" },
    ],
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus jurnal ini?. Lanjutkan?"
    );
    if (confirmDelete) {
      alert("Jurnal berhasil dihapus.");
    }
  };

  const handleEdit = () => {
    const confirmEdit = window.confirm(
      "Anda akan mengedit jurnal ini. Lanjutkan?"
    );
    if (confirmEdit) {
      alert("Anda sekarang dalam mode edit jurnal.");
    }
  };

  return (
    <div className="bg-white pt-10 wrapper-mobile ">
      <div className="flex items-center px-5 justify-between mb-8">
        <button onClick={() => navigate(-1)}>
          <Icon
            icon="ep:arrow-left-bold"
            width="32"
            height="32"
            style={{ color: "#BA324F" }}
          />
        </button>
        <h2 className="text-xl font-medium">Detail Jurnal</h2>
        <div></div>
      </div>

      <div className="flex w-full px-5 mb-2 py-5 justify-end items-center  ">
        <div className="flex gap-2 ">
          <button
            onClick={handleDelete}
            className="flex gap-2 items-center text-[#BA324F] hover:text-red-700   px-3 py-1 rounded border border-red-600">
            <Icon
              icon="mi:delete"
              width="24"
              height="24"
              style={{ color: "#BA324F" }}
            />{" "}
            Hapus
          </button>
          <button
            onClick={handleEdit}
            className="flex gap-2 items-center text-[#04395E] hover:text-blue-700  px-3 py-1 rounded border border-[#04395E]">
            <Icon
              icon="tabler:edit"
              width="24"
              height="24"
              style={{ color: "#04395E" }}
            />
            Edit
          </button>
        </div>
      </div>

      <div className={`flex flex-col gap-4 mx-5 px-2 py-3 border-2 border-[#f5f5f5] rounded-[5px]  `}>
        <div className={`flex justify-between items-center`}>
          <h6
            className={`font-bold bg-[#F8EBED] px-3 py-2 rounded-[10px] text-md text-[#BA324F]`}>
            # {journalData.klasifikasi}
          </h6>
          <div
            className="text-gray-500  p-2 rounded text-center text-sm"
            style={{ width: "100px", marginLeft: "0", fontSize: "14px" }}>
            {journalData.date}
          </div>
        </div>

        <div className={`flex items-center justify-between gap-4`}>
          <h4 className="font-semibold mb-1 text-[#BA324F]">
            Tanggal Kejadian
          </h4>
          <div className="flex items-center gap-2 ">
            <div
              className="bg-gray-100 text-gray-700 p-2 rounded text-center text-sm"
              style={{ width: "100px", fontSize: "14px" }}>
              {journalData.tanggalKejadian.mulai}
            </div>
            <span>-</span>
            <div
              className="bg-gray-100 text-gray-700 p-2 rounded text-center text-sm"
              style={{ width: "100px", fontSize: "14px" }}>
              {journalData.tanggalKejadian.akhir}
            </div>
          </div>
        </div>

        <div className={`flex flex-col gap-2`}>
        <h4 className="font-semibold mb-1 text-[#BA324F]">
            Judul Jurnal :
          </h4>
          <h3 className="font-semibold text-lg">{journalData.judul}</h3>
          {/* <p className="text-gray-500 ">{journalData.deskripsi}</p> */}
        </div>

        <div className={`flex flex-col gap-2`}>
        <h4 className="font-semibold mb-1 text-[#BA324F]">
            Ringkasan Kejadian :
          </h4>
          {/* <h3 className="font-semibold text-lg">{journalData.judul}</h3> */}
          <p className="text-gray-500 ">{journalData.deskripsi}</p>
        </div>

        {/* <div className={`flex flex-col gap-4`}>
          <h4 className="font-semibold ">Klasifikasi Kejadian</h4>
          <div
            className="bg-red-200 text-red-700 p-2 rounded text-center text-sm"
            style={{ width: "200px", fontSize: "14px" }}>
            {journalData.klasifikasi}
          </div>
        </div> */}

        {/* <div className={`flex flex-col gap-4`}>
          <h4 className="font-semibold ">Kronologi Kejadian</h4>
          <p className="text-gray-500 ">{journalData.kronologi}</p>
        </div> */}

        <div className={`flex flex-col gap-4`}>
        <h4 className="font-semibold mb-1 text-[#BA324F]">
            Lampiran Bukti :
          </h4>          <table className="w-full mb-6 border rounded">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Nama File</th>
                <th className="border px-4 py-2">File</th>
              </tr>
            </thead>
            <tbody>
              {journalData.lampiran.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2 text-center">
                    {item.namaFile}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <a
                      href={item.filePath}
                      className="text-blue-500 hover:underline">
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailJurnal;
