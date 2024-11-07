import React, { useEffect, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import { useSelector, useDispatch } from "react-redux";
import "react-quill/dist/quill.snow.css";
import { fetchCategories } from "../../features/categoriesSlice";
import {
  fetchJournal,
  postCase,
  postCaseDraft,
} from "../../features/casesSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function AddForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { journal, categories } = useSelector((state) => ({
    journal: state.cases.journal,
    categories: state.categories.category,
  }));

  const [selectedCategory, setSelectedCategory] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const quillRef = useRef(null);
  const FontAttributor = Quill.import("attributors/class/font");
  FontAttributor.whitelist = ["Nunito Sans"];
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
    ],
  };

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchJournal());
  }, [dispatch]);

  const handleJournalSelect = (event) => {
    const selectedJournal = journal.find((j) => j._id === event.target.value);
    if (selectedJournal) {
      quillRef.current.getEditor().setText(selectedJournal.description);
      setTitle(selectedJournal.title);
      setMessage(selectedJournal.message);
      setSelectedCategory(selectedJournal.category._id); // Set category based on selected journal
    }
  };
  const handleSubmit = async (isDraft = false) => {
    const dataCase = {
      title,
      description: quillRef.current.getEditor().getText(),
      category: selectedCategory,
      message,
      isApproved: isDraft ? "Draft" : "Submitted",
    };

    try {
      if (isDraft) {
        await dispatch(postCaseDraft(dataCase));
      } else {
        await dispatch(postCase(dataCase));
      }

      Swal.fire({
        icon: "success",
        title: isDraft ? "Draft Berhasil Disimpan!" : "Kasus Telah Diajukan!",
        text: isDraft
          ? "Draft kasus Anda berhasil disimpan, Anda bisa melanjutkan pengajuan nanti."
          : "Kasus Anda telah diajukan untuk ditinjau.",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/journal/mycases");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Terjadi Kesalahan",
        text: "Terdapat masalah dalam menyimpan atau mengajukan kasus. Silakan coba lagi.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-col gap-8">
      {/* Journal Selection */}
      <div className="flex flex-col gap-4">
        <label htmlFor="journal" className="font-bold">
          Pilih Jurnal Terkait
        </label>
        <select
          onChange={handleJournalSelect}
          className="bg-[#f5f5f5] px-5 py-3 pr-12 rounded-[10px] appearance-none focus:outline-none"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27%23ba324f%27%3E%3Cpath d=%27M7 10l5 5 5-5H7z%27/%3E%3C/svg%3E')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 1rem center",
            backgroundSize: "32px",
          }}
          id="journal">
          <option value="">Pilih Jurnal</option>
          {journal.map((item) => (
            <option key={item._id} value={item._id}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      {/* Category Selection */}
      <div className="flex flex-col gap-4">
        <label htmlFor="category" className="font-bold">
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
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Pilih Kategori</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Title Input */}
      <div className="flex flex-col gap-4">
        <label htmlFor="title" className="font-bold">
          Judul Kasus
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-5 py-3 rounded-[10px] bg-[#f5f5f5] text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ba324f]"
          placeholder="Masukkan judul kasus"
        />
        <p className="text-sm font-light text-[#BA324F]">
          **Pilih judul yang menggambarkan kasus Anda secara jelas
        </p>
      </div>

      {/* Rich Text Editor for Description */}
      <div className="flex flex-col gap-4">
        <label htmlFor="description" className="font-bold">
          Ringkasan Kasus
        </label>
        <ReactQuill
          ref={quillRef}
          className="bg-[#f5f5f5] rounded-[10px] border-0 custom-quill-editor"
          theme="snow"
          modules={modules}
        />
        <p className="text-sm font-light text-[#BA324F]">
          **Buatlah ringkasan yang padat dan menarik dan fokus pada inti masalah
        </p>
      </div>

      {/* Message Input */}
      <div className="flex flex-col gap-4">
        <label htmlFor="message" className="font-bold">
          Pesan Tambahan untuk Komunitas (opsional)
        </label>
        <input
          type="text"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="px-5 py-3 rounded-[10px] bg-[#f5f5f5] text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ba324f]"
          placeholder="Masukkan pesan tambahan"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-row justify-between gap-4">
        <button
          onClick={() => handleSubmit(true)}
          className="border-2 border-[#04395E] px-5 py-3 rounded-[10px] text-[#04395E]">
          Simpan Draft
        </button>
        <button
          onClick={() => handleSubmit(false)}
          className="border-2 bg-[#04395E] px-5 py-3 rounded-[10px] text-[#ffffff]">
          Ajukan Kasus
        </button>
      </div>

      {/* Instructions */}
      <div className="flex flex-col items-center justify-start gap-4">
        <div className="px-5 py-3 bg-[#F8EBED]">
          <p className="text-[#BA324F] text-sm">
            -Kasus Anda akan ditinjau, dan jika disetujui akan tampil di beranda
            untuk mendapatkan perhatian
          </p>
          <p className="text-[#BA324F] text-sm">
            -Pastikan semua informasi sudah lengkap dan akurat
          </p>
          <p className="text-[#BA324F] text-sm">
            -Proses pengajuan akan memakan waktu beberapa saat sebelum kasus
            muncul di beranda
          </p>
        </div>
      </div>
    </div>
  );
}

export default AddForm;
