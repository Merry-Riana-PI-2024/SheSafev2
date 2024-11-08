import React, { useEffect, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import { useSelector, useDispatch } from "react-redux";
import "react-quill/dist/quill.snow.css";
import { fetchCategoryById } from "../../features/categoriesSlice";
import { fetchJournal, fetchCaseDetails, postCase, postCaseDraft } from "../../features/casesSlice";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

function EditForm() {
  const { caseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const journal = useSelector((state) => state.cases?.journal || []);
  const selectedCase = useSelector((state) => state.cases?.selectedCase || null);

  const [selectedJournal, setSelectedJournal] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [categoryName, setCategoryName] = useState("Memuat...");

  const quillRef = useRef(null);
  const FontAttributor = Quill.import("attributors/class/font");
  FontAttributor.whitelist = ["Nunito Sans"];
  Quill.register(FontAttributor, true);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3] }],
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ],
  };

  useEffect(() => {
    dispatch(fetchJournal());

    if (caseId) {
      dispatch(fetchCaseDetails(caseId));
    }
  }, [dispatch, caseId]);

  useEffect(() => {
    if (selectedCase) {
      setTitle(selectedCase.title || "");
      setMessage(selectedCase.message || "");
      setSelectedJournal(selectedCase.journal || "");

      if (selectedCase.category) {
        dispatch(fetchCategoryById(selectedCase.category))
          .then((response) => {
            if (response.payload && response.payload.data) {
              setCategoryName(response.payload.data.name);
            } else {
              setCategoryName("Gagal memuat kategori");
            }
          })
          .catch(() => {
            setCategoryName("Gagal memuat kategori");
          });
      }

      if (quillRef.current) {
        quillRef.current.getEditor().setText(selectedCase.description || "");
      }
    }
  }, [selectedCase, dispatch]);

  const handleSubmit = async (isDraft = false) => {
    const dataCase = {
      title,
      description: quillRef.current.getEditor().getText(),
      category: selectedCase.category,
      journal: selectedJournal,
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
        text: error.message || "Terdapat masalah dalam menyimpan atau mengajukan kasus. Silakan coba lagi.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <label htmlFor="journal" className="font-bold">
          Pilih Jurnal Terkait
        </label>
        <select
          value={selectedJournal || ""}
          onChange={(e) => setSelectedJournal(e.target.value)}
          className="bg-[#f5f5f5] px-5 py-3 pr-12 rounded-[10px] appearance-none focus:outline-none"
          id="journal">
          <option value="">Pilih Jurnal</option>
          {journal.length > 0 ? (
            journal.map((item) => (
              <option key={item._id} value={item._id}>
                {item.title}
              </option>
            ))
          ) : (
            <option value="" disabled>Tidak ada jurnal tersedia</option>
          )}
        </select>
      </div>

      <div className="flex flex-col gap-4">
        <label htmlFor="category" className="font-bold">
          Kategori Kasus Kejadian
        </label>
        <input
          id="category"
          value={categoryName}
          readOnly
          className="bg-[#f5f5f5] px-5 py-3 pr-12 rounded-[10px] focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-4">
        <label htmlFor="title" className="font-bold">Judul Kasus</label>
        <input
          type="text"
          id="title"
          value={title}
          readOnly
          className="px-5 py-3 rounded-[10px] bg-[#f5f5f5] text-black placeholder:text-gray-400 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-4">
        <label htmlFor="description" className="font-bold">Ringkasan Kasus</label>
        <ReactQuill
          ref={quillRef}
          className="bg-[#f5f5f5] rounded-[10px] border-0"
          theme="snow"
          modules={modules}
          value={selectedCase ? selectedCase.description : ''}
          readOnly
        />
      </div>

      <div className="flex flex-col gap-4">
        <label htmlFor="message" className="font-bold">Pesan Tambahan (opsional)</label>
        <input
          type="text"
          id="message"
          value={message}
          readOnly
          className="px-5 py-3 rounded-[10px] bg-[#f5f5f5] text-black placeholder:text-gray-400 focus:outline-none"
        />
      </div>

      <div className="flex flex-row justify-between gap-4">
        <button onClick={() => handleSubmit(true)} className="border-2 border-[#04395E] px-5 py-3 rounded-[10px] text-[#04395E]">
          Simpan Draft
        </button>
        <button onClick={() => handleSubmit()} className="bg-[#04395E] text-white px-5 py-3 rounded-[10px]">
          Ajukan Kasus
        </button>
      </div>
    </div>
  );
}

export default EditForm;
