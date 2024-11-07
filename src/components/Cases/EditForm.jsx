import React, { useState, useEffect, useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from 'axios';

function EditForm({ caseId }) {
  // State untuk menyimpan data kasus
  const [caseData, setCaseData] = useState({
    title: "",
    description: "",
    category: "",
    communityMessage: "",
  });

  const quillRef = useRef(null);
  const FontAttributor = Quill.import("attributors/class/font");
  FontAttributor.whitelist = ["Nunito Sans"];
  Quill.register(FontAttributor, true);

  // Modules untuk React Quill
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3] }],
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }], // Jika align tidak diperlukan, hapus baris ini
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
    ],
  };
  

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  // Mengambil data kasus dari server
  useEffect(() => {
    if (caseId) {
      axios.get(`https://peculiar-linnet-shesafe-47ad0121.koyeb.app/cases/${caseId}`)
        .then(response => {
          const caseData = response.data.data;
          setCaseData({
            title: caseData.title || "",
            description: caseData.description || "",
            category: caseData.category || "",
            communityMessage: caseData.communityMessage || "",
          });
        })
        .catch(error => {
          console.error("Ada masalah saat mengambil data kasus:", error);
        });
    }
  }, [caseId]);

  const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = () => {
  setIsSubmitting(true);
  axios.put(`https://peculiar-linnet-shesafe-47ad0121.koyeb.app/cases/${caseId}`, {
    title: caseData.title,
    description: caseData.description,
    category: caseData.category,
    communityMessage: caseData.communityMessage,
  })
    .then(response => {
      console.log("Data berhasil diperbarui:", response.data);
      setIsSubmitting(false); 
    })
    .catch(error => {
      console.error("Ada masalah saat memperbarui data kasus:", error);
      setIsSubmitting(false); 
    });
};


  return (
    <>
      <div className={`mt-10 flex flex-col gap-8`}>
        <div className={`flex flex-col gap-4`}>
          <label htmlFor="" className={`font-bold`}>Pilih Jurnal Terkait</label>
          <select
            className="bg-[#f5f5f5] px-5 py-3 pr-12 rounded-[10px] appearance-none focus:outline-none"
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27%23ba324f%27%3E%3Cpath d=%27M7 10l5 5 5-5H7z%27/%3E%3C/svg%3E')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
              backgroundSize: "32px",
            }}
            name=""
            id=""
            value={caseData.category} 
            onChange={(e) => setCaseData({ ...caseData, category: e.target.value })} 
          >
            <option value="">Pilih Kategori</option>
          </select>
        </div>

        <div className={`flex flex-col gap-4`}>
          <label htmlFor="" className={`font-bold`}>Judul Kasus</label>
          <input
            className="px-5 py-3 rounded-[10px] bg-[#f5f5f5] text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ba324f]"
            type="text"
            value={caseData.title} 
            onChange={(e) => setCaseData({ ...caseData, title: e.target.value })}
            placeholder="Masukan Judul.."
          />
          <p className={`text-sm font-light text-[#BA324F]`}>
            **Pilih judul yang menggambarkan kasus Anda secara jelas
          </p>
        </div>

        <div className={`flex flex-col gap-4`}>
          <label htmlFor="" className={`font-bold`}>Ringkasan Kasus</label>
          <ReactQuill
            ref={quillRef}
            className={`bg-[#f5f5f5] rounded-[10px] border-0 custom-quill-editor`}
            theme="snow"
            modules={modules}
            formats={formats}
            value={caseData.description} 
            onChange={(value) => setCaseData({ ...caseData, description: value })}
          />
          <p className={`text-sm font-light text-[#BA324F]`}>
            **Buatlah ringkasan yang padat dan menarik dan fokus pada inti masalah
          </p>
        </div>

        <div className={`flex flex-col gap-4`}>
          <label htmlFor="" className={`font-bold`}>Pesan Kepada Komunitas (Opsional)</label>
          <textarea
            className={`bg-[#f5f5f5] rounded-[10px] px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#ba324f]`}
            value={caseData.communityMessage} 
            onChange={(e) => setCaseData({ ...caseData, communityMessage: e.target.value })}
            placeholder="Tulis pesan singkat untuk komunitas"
          />
          <p className={`text-sm font-light text-[#BA324F]`}>
            **Gunakan kesempatan ini untuk mengajak komunitas memberikan dukungan atau saran
          </p>
        </div>

        <div className={`flex flex-row items-center justify-between gap-4`}>
          <button
            className={`border-2 border-[#04395E] px-5 py-3 rounded-[10px] text-[#04395E]`}
            onClick={() => console.log("Draft disimpan")} // Handle draft save if needed
          >
            Simpan Draft
          </button>
          <button
            className={`border-2 bg-[#04395E] px-5 py-3 rounded-[10px] text-[#ffffff]`}
            onClick={handleSubmit}
            disabled={isSubmitting} 
          >
             {isSubmitting ? 'Mengirim...' : 'Ajukan Kasus'}
             Edit Pengajuan Kasus
          </button>
        </div>
      </div>
    </>
  );
}

export default EditForm;
