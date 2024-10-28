import React, { useState, useEffect } from 'react';
import BottomNav from "../components/NavBottom"

const mockData = [
  {
    id: 1,
    tanggal: '15 Agustus 2024',
    status: 'Menunggu Persetujuan',
    judul: 'Bertahan dari Pelecehan di Tempat Kerja',
    deskripsi: 'Saya mengalami pelecehan...',
    draft: false,
  },
  {
    id: 2,
    tanggal: '15 Agustus 2024',
    status: 'Menunggu Persetujuan',
    judul: 'Perjuangan Melawan Pernikahan Paksa',
    deskripsi: 'Saya sudah bertahun-tahun...',
    draft: true,
  },
];

function ListPengajuanKasus() {
  const [data, setData] = useState(mockData);
  const [filteredData, setFilteredData] = useState(mockData);
  const [selectedDate, setSelectedDate] = useState("Pilih Tanggal");

  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    const formattedDate = date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
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
    const filtered = data.filter(item => item.tanggal === date);
    setFilteredData(filtered);
  };

  const handleEdit = () => alert('Anda yakin akan edit pengajuan kasus ini');
  const handleDelete = () => alert('Anda yakin akan hapus pengajuan kasus ini');

  return (
    <div className="flex flex-col min-h-screen bg-pink-100 items-center">
      <div className="flex flex-col w-full max-w-[480px] flex-grow bg-white shadow-lg rounded-lg p-4 mx-auto">
        <ul className="flex w-full mb-4">
          <li className="flex-1 text-center">
            <button className="w-full py-2 text-gray-600 bg-white rounded-b-lg font-semibold" style={{ border: '1px solid rgba(4, 57, 94, 1)' }}>My Jurnal</button>
          </li>
          <li className="flex-1 text-center">
            <button className="w-full py-2 text-white bg-[#04395e] rounded-b-lg font-semibold">Pengajuan Kasus</button>
          </li>
        </ul>

        <div className="flex justify-between items-center my-4">
          <h3 className="text-lg font-semibold">Pengajuan Kasus</h3>
          <div className="relative">
            <input
              type="date"
              className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
              onChange={handleDateChange}
            />
            <button className="bg-pink-600 text-white px-4 py-2 rounded inline-flex items-center">
              <span>{selectedDate}</span>
              <i className="fas fa-calendar-alt ml-2"></i>
            </button>
          </div>
        </div>

        {filteredData.map((item) => (
          <div key={item.id} className="bg-white border rounded-lg shadow-sm mb-4">
            <div className="flex items-center items-center px-4 py-2">
                <span className="text-sm text-gray-700 bg-gray-200 px-2 py-1 rounded mr-2">{item.tanggal}</span>
                <span className={`${item.draft ? 'text-red-600 bg-red-100' : 'text-pink-600 bg-pink-100'} text-sm font-semibold px-2 py-1 rounded`}>
                  {item.draft ? 'Draft' : item.status}
                </span>
              </div>
            <div className="px-4 py-2">
              <h4 className="font-semibold text-gray-800">{item.judul}</h4>
              <p className="text-gray-600 mt-2">{item.deskripsi}</p>
            </div>


            <div style={{ backgroundColor: 'rgba(245, 245, 245, 1)' }} className="flex justify-between p-4"> 
                <button onClick={handleEdit} className="flex items-center text-blue-600 hover:text-blue-700  px-3 py-1 rounded border border-blue-600">
                  <i className="fas fa-edit mr-2"></i> Edit
                </button>
                <button onClick={handleDelete} className="flex items-center text-red-600 hover:text-red-700   px-3 py-1 rounded border border-red-600">
                  <i className="fas fa-trash-alt mr-2"></i> Hapus
                </button>
            </div>

          </div>
        ))}
      </div>
      <BottomNav />
    </div>
  );
}

export default ListPengajuanKasus;


