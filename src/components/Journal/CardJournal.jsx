import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Link } from "react-router-dom";

const mockData = [
  {
    id: 1,
    tanggal: "15 Agustus 2024",
    status: "Draft",
    judul: "Bertahan dari Pelecehan di Tempat Kerja",
    deskripsi: "Saya mengalami pelecehan...",
    category: "KDRT",
  },
  {
    id: 2,
    tanggal: "15 Agustus 2024",
    status: "Draft",
    judul: "Perjuangan Melawan Pernikahan Paksa",
    deskripsi: "Saya sudah bertahun-tahun...",
    category: "KDRT",
  },
];

function CardJournal() {
  const [data] = useState(mockData);

  const handleEdit = () => alert("Anda yakin akan edit jurnal ini");
  const handleDelete = () => alert("Anda yakin akan hapus jurnal ini");
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="bg-white border w-full rounded-lg ">
          <div className="flex justify-between items-center items-center px-4 mt-5">
            <span
              className={`text-[#BA324F] bg-red-100 text-sm font-semibold px-2 py-2 rounded`}>
              {item.category}
            </span>
            <span className="text-sm text-[#04395E]  px-2 py-2 rounded mr-2">
              {item.tanggal}
            </span>
          </div>

          <div className="px-4 py-3">
            <h4 className="font-semibold text-gray-900 text-lg">
              {item.judul}
            </h4>
            <p className="text-gray-600 text-sm mt-2">{item.deskripsi}</p>
          </div>

          <div
            style={{ backgroundColor: "rgba(245, 245, 245, 1)" }}
            className="flex justify-between px-4 py-2 border-t  rounded-b-lg">
            <Link to="/editJurnal">
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
            </Link>
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
          </div>
        </div>
      ))}
    </>
  );
}

export default CardJournal;
