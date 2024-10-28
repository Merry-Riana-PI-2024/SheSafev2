import React, { useState, useEffect } from 'react';

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
      setFilteredData(data); // Tampilkan semua data jika tidak ada tanggal yang dipilih
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
      <div className="flex flex-col w-full max-w-md flex-grow bg-white shadow-lg rounded-lg p-4">
        <ul className="flex w-full mb-4">
          <li className="flex-1 text-center">
            <button className="w-full py-2 text-gray-600 bg-gray-100 rounded-b-lg font-semibold">My Jurnal</button>
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
            <div className="flex justify-between px-4 py-2 bg-gray-100 rounded-t-lg">
              <span className="text-blue-900">{item.tanggal}</span>
              <span className={`text-pink-600 ${item.draft ? 'hidden' : ''}`}>{item.status}</span>
              {item.draft && <span className="text-yellow-600">Draft</span>}
            </div>
            <div className="px-4 py-2">
              <h4 className="font-semibold text-gray-800">{item.judul}</h4>
              <p className="text-gray-600 mt-2">{item.deskripsi}</p>
            </div>
            <div className="flex justify-between p-4">
              <button onClick={handleEdit} className="flex items-center bg-gray-100 text-blue-600 rounded px-3 py-1">
                <i className="fas fa-edit mr-2"></i> Edit
              </button>
              <button onClick={handleDelete} className="flex items-center bg-red-100 text-red-600 rounded px-3 py-1">
                <i className="fas fa-trash-alt mr-2"></i> Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
      <nav className="fixed bottom-0 w-full max-w-md bg-white shadow-lg rounded-t-lg p-3 flex justify-around items-center">
        <button className="flex flex-col items-center text-gray-600 hover:text-blue-600">
          <i className="fas fa-home text-lg"></i>
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-600 hover:text-blue-600">
          <i className="fas fa-book text-lg"></i>
          <span className="text-xs">Jurnal</span>
        </button>
        <button className="flex flex-col items-center text-gray-600 hover:text-blue-600">
          <i className="fas fa-briefcase text-lg"></i>
          <span className="text-xs">Kasus</span>
        </button>
        <button className="flex flex-col items-center text-gray-600 hover:text-blue-600">
          <i className="fas fa-user text-lg"></i>
          <span className="text-xs">Profile</span>
        </button>
      </nav>
    </div>
  );
}

export default ListPengajuanKasus;


