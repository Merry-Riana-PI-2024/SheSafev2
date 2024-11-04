import React, { useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
// import ImageResize from 'quill-image-resize-module';

function AddForm() {
  const quillRef = useRef(null);
  const FontAttributor = Quill.import("attributors/class/font");
  FontAttributor.whitelist = ["Nunito Sans"];
  // Quill.register('modules/imageResize', ImageResize);
  Quill.register(FontAttributor, true);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3] }],
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
    ],
    // imageResize: {
    //   displayStyles: {
    //     backgroundColor: "black",
    //     border: "none",
    //     color: "white",
    //   },
    //   modules: ["Resize", "DisplaySize", "Toolbar"],
    // },
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

  return (
    <>
      <div className={`mt-10 flex flex-col gap-8`}>
        <div className={`flex flex-col gap-4`}>
          <label htmlFor="" className={`font-bold`}>
            Pilih Jurnal Terkait
          </label>
          <select
            className="bg-[#f5f5f5] px-5 py-3 pr-12 rounded-[10px] appearance-none focus:outline-none"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27%23ba324f%27%3E%3Cpath d=%27M7 10l5 5 5-5H7z%27/%3E%3C/svg%3E')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
              backgroundSize: "32px",
            }}
            name=""
            id="">
            <option value="">Pilih Jurnal</option>
          </select>
        </div>

        <div className={`flex flex-col gap-4`}>
          <label htmlFor="" className={`font-bold`}>
            Judul Kasus
          </label>
          <input
            className="px-5 py-3 rounded-[10px] bg-[#f5f5f5] text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ba324f]"
            type="text"
            name=""
            id=""
            placeholder="Masukan Judul.."
          />
          <p className={`text-sm font-light text-[#BA324F]`}>
            **Pilih judul yang menggambarkan kasus Anda secara jelas
          </p>
        </div>

        <div className={`flex flex-col gap-4`}>
          <label htmlFor="" className={`font-bold`}>
            Ringkasan Kasus
          </label>
          <ReactQuill
            ref={quillRef}
            className={`bg-[#f5f5f5] rounded-[10px] border-0 custom-quill-editor`}
            theme="snow"
            modules={modules}
            formats={formats}
          />
          <p className={`text-sm font-light text-[#BA324F]`}>
            **Buatlah ringkasan yang padat dan menarik dan fokus pada inti
            masalah
          </p>
        </div>

        <div className={`flex flex-col gap-4`}>
          <label htmlFor="" className={`font-bold`}>
            Pilih Kategori Kasus Kejadian
          </label>
          <select
            className="bg-[#f5f5f5] px-5 py-3 pr-12 rounded-[10px] appearance-none focus:outline-none"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27%23ba324f%27%3E%3Cpath d=%27M7 10l5 5 5-5H7z%27/%3E%3C/svg%3E')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
              backgroundSize: "32px",
            }}
            name=""
            id="">
            <option value="">Pilih Kategori</option>
          </select>
        </div>

        <div className={`flex flex-col gap-4`}>
          <label htmlFor="" className={`font-bold`}>
            Pesan Kepada Komunitas (Opsional)
          </label>
          <textarea
            className={`bg-[#f5f5f5] rounded-[10px] px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#ba324f]`}
            placeholder="Tulis pesan singkat untuk komunitas"></textarea>
          <p className={`text-sm font-light text-[#BA324F]`}>
            **Gunakan kesempatan ini untuk mengajak komunitas memberikan
            dukungan atau saran
          </p>
        </div>

        <div className={`flex flex-col items-center justify-start gap-4`}>
          <div className={`px-5 py-3 bg-[#F8EBED] `}>
            <p className={`text-[#BA324F] text-sm`}>
              -Kasus Anda akan ditinjau , dan jika disetujui akan tampil di
              beranda untuk mendapatkan perhatian
            </p>
            <p className={`text-[#BA324F] text-sm`}>
              -Pastikan semua informasi sudah lengkap dan akurat
            </p>
            <p className={`text-[#BA324F] text-sm`}>
              -Proses pengajuan akan memakan waktu beberapa saat sebelum kasus
              muncul di beranda
            </p>
          </div>
        </div>

        <div className={`flex flex-row items-center justify-between gap-4`}>
          <button
            className={`border-2 border-[#04395E] px-5 py-3 rounded-[10px] text-[#04395E]`}>
            Simpan Draft
          </button>
          <button
            className={`border-2 bg-[#04395E] px-5 py-3 rounded-[10px] text-[#ffffff] `}>
            Ajukan Kasus
          </button>
        </div>

        
      </div>
     
    </>
  );
}

export default AddForm;
