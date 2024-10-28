import React from "react";
import { useNavigate } from "react-router-dom";

const DetailJurnal = () => {
    const navigate = useNavigate();
    const journalData = {
        date: "10/28/2024",
        judul: "Kekerasan Verbal",
        deskripsi: "Kekerasan yang saya alami pada lingkungan setempat",
        tanggalKejadian: {
            mulai: "2024-10-25",
            akhir: "2024-10-31"
        },
        klasifikasi: "Kekerasan Verbal",
        kronologi: "Saya sering mengalami kekerasan verbal yang diberikan oleh sekelompok pria sejak saya pindah rumah",
        lampiran: [
            { namaFile: "Nama File 1", filePath: "/path/to/file1" },
            { namaFile: "Nama File 2", filePath: "/path/to/file2" }
        ]
    };

    const handleDelete = () => {
        const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus jurnal ini?. Lanjutkan?");
        if (confirmDelete) {
            alert("Jurnal berhasil dihapus.");
        }
    };

    const handleEdit = () => {
        const confirmEdit = window.confirm("Anda akan mengedit jurnal ini. Lanjutkan?");
        if (confirmEdit) {
            alert("Anda sekarang dalam mode edit jurnal.");
        }
    };

    return (
        <div className="bg-red-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg max-w-md w-full">
                <div className="relative flex items-center justify-center mb-6">
                    <button onClick={() => navigate(-1)} className="absolute left-0 text-gray-500 hover:text-gray-700 focus:outline-none">
                        <span className="text-2xl">&lt;</span>
                    </button>
                    <h2 className="text-xl font-semibold">Detail Jurnal</h2>
                </div>

                <div className="flex items-center justify-between mb-6">
                    <div className="text-gray-500 bg-gray-100 p-2 rounded text-center text-sm" style={{ width: '100px', marginLeft: '0', fontSize: '14px' }}>{journalData.date}</div>
                    <div className="flex gap-2 ml-4">
                        <button 
                            onClick={handleDelete} 
                            className="flex items-center gap-1 px-3 py-1 bg-transparent border-2 border-red-200 text-red-600 rounded-md hover:bg-red-50 hover:border-red-300 text-sm">
                            <i className="fas fa-trash-alt"></i> Hapus
                        </button>
                        <button 
                            onClick={handleEdit} 
                            className="flex items-center gap-1 px-3 py-1 bg-transparent border-2 border-blue-200 text-blue-600 rounded-md hover:bg-blue-50 hover:border-blue-300 text-sm">
                            <i className="fas fa-edit"></i> Edit
                        </button>
                    </div>
                </div>

                <h3 className="font-semibold text-lg">{journalData.judul}</h3>
                <p className="text-gray-500 mb-6">{journalData.deskripsi}</p>

                <h4 className="font-semibold mb-1">Tanggal Kejadian</h4>
                <div className="flex items-center gap-2 mb-6">
                    <div className="bg-gray-100 text-gray-700 p-2 rounded text-center text-sm" style={{ width: '100px', fontSize: '14px' }}>{journalData.tanggalKejadian.mulai}</div>
                    <span>-</span>
                    <div className="bg-gray-100 text-gray-700 p-2 rounded text-center text-sm" style={{ width: '100px', fontSize: '14px' }}>{journalData.tanggalKejadian.akhir}</div>
                </div>

                <h4 className="font-semibold mb-1">Klasifikasi Kejadian</h4>
                <div className="bg-red-200 text-red-700 p-2 rounded mb-6 text-center text-sm" style={{ width: '200px', fontSize: '14px' }}>{journalData.klasifikasi}</div>

                <h4 className="font-semibold mb-1">Kronologi Kejadian</h4>
                <p className="text-gray-500 mb-6">{journalData.kronologi}</p>

                <h4 className="font-semibold mb-2">Lampiran Bukti</h4>
                <table className="w-full mb-6 border rounded">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-4 py-2">Nama File</th>
                            <th className="border px-4 py-2">File</th>
                        </tr>
                    </thead>
                    <tbody>
                        {journalData.lampiran.map((item, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2 text-center">{item.namaFile}</td>
                                <td className="border px-4 py-2 text-center">
                                    <a href={item.filePath} className="text-blue-500 hover:underline">
                                        Download
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DetailJurnal;
