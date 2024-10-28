import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState, useEffect } from "react";

const mockData = [
  {
    id: 1,
    tanggal: "15 Agustus 2024",
    status: "Menunggu Persetujuan",
    judul: "Bertahan dari Pelecehan di Tempat Kerja",
    deskripsi: "Saya mengalami pelecehan...",
    draft: false,
  },
  {
    id: 2,
    tanggal: "15 Agustus 2024",
    status: "Menunggu Persetujuan",
    judul: "Perjuangan Melawan Pernikahan Paksa",
    deskripsi: "Saya sudah bertahun-tahun...",
    draft: true,
  },
];

function ListPengajuanKasus() {
  const [data, setData] = useState(mockData);
  const [filteredData, setFilteredData] = useState(mockData);
  const [selectedDate, setSelectedDate] = useState("Pilih Tanggal");

  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    const formattedDate = date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setSelectedDate(formattedDate || "Pilih Tanggal");
  };

  useEffect(() => {
    if (selectedDate === "Pilih Tanggal") {
      setFilteredData(data);
    } else {
      filterByDate(selectedDate);
    }
  }, [selectedDate, data]);

  const filterByDate = (date) => {
    const filtered = data.filter((item) => item.tanggal === date);
    setFilteredData(filtered);
  };

  const handleEdit = () => alert("Anda yakin akan edit pengajuan kasus ini");
  const handleDelete = () => alert("Anda yakin akan hapus pengajuan kasus ini");

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mt-10 px-5 mb-8">
        <h3 className="text-lg font-semibold">Pengajuan Kasus</h3>
        {/* ganti filter berdasarkan status approval terdiri dari menunggupersetujuan, revisi,disetujui,ditolak */}
        <div className="relative">
          <input
            type="date"
            className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
            onChange={handleDateChange}
          />
          <button className="bg-[#BA324F] text-white px-4 py-2 rounded-[10px] inline-flex items-center">
            <span>{selectedDate}</span>
            <i className="fas fa-calendar-alt ml-2"></i>
          </button>
        </div> 
         {/* ganti filter berdasarkan status approval terdiri dari menunggupersetujuan, revisi,disetujui,ditolak */}


      </div>

      {filteredData.map((item) => (
        <div
          key={item.id}
          className="bg-white border rounded-lg shadow-sm mb-3 mx-5 ">
          <div className="flex justify-between items-center items-center px-4 mt-5">
            <span
              className={`${
                item.draft
                  ? "text-red-600 bg-red-100"
                  : "text-pink-600 bg-pink-100"
              } text-sm font-semibold px-2 py-2 rounded`}>
              {item.draft ? "Draft" : item.status}
            </span>
            <span className="text-sm text-[#04395E] px-2 py-2 rounded mr-2">
              {item.tanggal}
            </span>
          </div>

          <div className="px-4 py-3">
            <h4 className="font-semibold text-lg text-gray-800">
              {item.judul}
            </h4>
            <p className="text-gray-600 mt-2">{item.deskripsi}</p>
          </div>

          <div
            style={{ backgroundColor: "rgba(245, 245, 245, 1)" }}
            className="flex justify-between px-4 py-2">
            <button
              onClick={handleEdit}
              className="flex gap-2 items-center text-[#04395E] hover:text-blue-700  px-3 py-1 rounded border border-[#04395E]">
                          <Icon icon="tabler:edit" width="24" height="24"  style={{color: "#04395E"}} /> 
                          Edit
            </button>
            <button
              onClick={handleDelete}
              className="flex gap-2 items-center text-[#BA324F] hover:text-red-700   px-3 py-1 rounded border border-red-600">
             <Icon icon="mi:delete" width="24" height="24"  style={{color: "#BA324F"}} /> Hapus
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListPengajuanKasus;
