import { Icon } from "@iconify/react";
import foto from "../../assets/images/fp1.png";
import Commentar from "./Commentar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCommentar, resetCommentar } from "../../features/commentarSlice";
import { useParams } from "react-router-dom";

function DetailContent({ data }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.commentars.commentar);
  const pagination = useSelector((state) => state.commentars.pagination);

  const { total_data, per_page, current_page, total_pages } = pagination;

  const validComments = Array.isArray(comment) ? comment : [];
  const [page, setPage] = useState(current_page);

  // Ambil komentar berdasarkan halaman yang aktif
  useEffect(() => {
    dispatch(resetCommentar()); // Reset data komentar sebelumnya
    dispatch(fetchCommentar({ id, page, perPage: per_page }));
  }, [dispatch, id, page, per_page]);

  // Fungsi untuk mengubah halaman
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= total_pages) {
      setPage(newPage);
    }
  };

  // console.log("Comments:", validComments);
  // console.log("Pagination:", pagination);

  return (
    <>
      <div className="flex flex-row gap-8 items-center justify-start">
        <img src={foto} alt="User Avatar" />
        <div className="flex flex-col gap-1">
          <h6 className="text-[#BA324F] font-bold text-md">
            {data.isAnonimous}
          </h6>
          <p className="text-[#8c8c8c] font-light">{data.approved}</p>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <h6 className="text-[#BA324F] font-bold text-m">
          #{data.category.name}
        </h6>
        <div className="flex gap-2">
          <Icon
            icon="mingcute:love-line"
            width="24"
            height="24"
            style={{ color: "#BA324F" }}
          />
          <p className="text-[#BA324F] text-md">
            {data.supportCounter} Dukungan
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-3">
        <h5 className="text-black text-lg font-bold">{data.title}</h5>
        <p className="text-black font-light text-sm">{data.description}</p>

        <div className="flex flex-col gap-2">
          <h5 className="text-black text-md font-bold">
            Pesan untuk Komunitas
          </h5>
          <p className="text-black font-light text-sm">
            {!data.message ? "Tidak ada Pesan untuk Komunitas" : data.message}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-1 mt-10 px-4 py-2 rounded-[10px] bg-[#F8EBED]">
        <p className="font-bold text-sm text-[#BA324F]">Catatan:</p>
        <p className="font-light text-sm text-[#BA324F]">
          Kasus ini telah diajukan oleh pengguna berdasarkan jurnal pribadi yang
          telah ditulis beberapa kali terkait pengalaman kekerasan yang
          dialaminya. Setelah diverifikasi oleh admin, kasus ini dipublikasikan
          untuk mendapatkan dukungan dan saran dari komunitas SheSafe.
        </p>
      </div>

      <div className="mt-10 pb-[5rem]">
        <h6 className="text-black font-bold text-lg">
          Komentar ({total_data || 0})
        </h6>
        {validComments.length > 0 ? (
          validComments.map((item) => (
            <Commentar
              commentar={item}
              key={item._id}
              page={page}
              perPage={per_page}
            />
          ))
        ) : (
          <h6 className="text-black mt-6">Belum Ada Komentar</h6>
        )}

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <nav aria-label="Pagination">
            <ul className="flex items-center space-x-3">
              <li>
                <button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page <= 1}
                  className="px-3 py-1 text-sm font-medium text-white bg-[#BA324F] rounded-md disabled:opacity-50">
                  Previous
                </button>
              </li>
              <li>
                <span className="text-sm font-medium">
                  Page {page} of {total_pages}
                </span>
              </li>
              <li>
                <button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page >= total_pages}
                  className="px-3 py-1 text-sm font-medium text-white bg-[#BA324F] rounded-md disabled:opacity-50">
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default DetailContent;
