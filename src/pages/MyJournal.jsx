import CardJournal from "../components/Journal/CardJournal";
import { useEffect, useCallback, useState } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function MyJournal() {
  // const API_BASE_URL = "http://localhost:4000"
  const [journals, setJournals] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sort, setSort] = useState("desc");
  const [loading,setLoading]=useState(true);
  const [itemsPerPage] = useState(6);

  // Function to fetch journals with pagination and sorting
  const fetchJournals = useCallback(async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/journal/`, {
        withCredentials: true,
        params: { page, perPage: 5, sort },
      });
      setJournals(response.data.data); // Update the journals array
      setTotalPages(response.data.totalPages); // Update the total number of pages
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch journals", error);
    }
  }, [page, sort]);

  // Fetch data tiap kali `page` / sort berubah
  useEffect(() => {
    fetchJournals();
  }, [fetchJournals]);

  // Handle next page
  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  // Handle previous page
  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  // Handle sort order change
  const handleSortChange = (event) => {
    setSort(event.target.value); // Update sort order
    setPage(1); // Reset ke first page tiap kali sorting berubah
  };

  return (
    <>
      <div className={`flex flex-col gap-8`}>
        <div className={`flex justify-between items-center px-5 mt-10`}>
          <h4 className={`text-black text-lg font-bold`}>My Jurnal</h4>
          <select
            className={`bg-[#BA324F] rounded-[10px] text-white px-4 py-2`}
            value={sort}
            onChange={handleSortChange}>
            <option value="desc">Terbaru</option>
            <option value="asc">Terlama</option>
          </select>
        </div>

        {loading ? ( <div>
              {new Array(itemsPerPage).fill(null).map((_, index) => (
                <div key={index}>
                  <div className="space-y-4 mx-5 mt-10">
                    <div className="flex justify-between gap-4 ">
                      <div className="h-[50px] w-[100px] bg-gray-300 animate-pulse rounded-md"></div>
                      <div className="h-[50px] w-[200px] bg-gray-300 animate-pulse rounded-md"></div>
                    </div>
                    <div className="h-8 bg-gray-300 animate-pulse rounded-md"></div>
                    <div className="h-[100px] bg-gray-300 animate-pulse rounded-md"></div>
                  </div>
                </div>
              ))}
            </div>) : journals.length === 0 ? (<h1 className="mx-5 text-[#BA324F] text-[16px]">Belum ada Jurnal yang Kamu Buat</h1>) : (<div className={`flex flex-col gap-3 items-center px-5`}>
          {journals.map((journal) => (
            <CardJournal key={journal._id} journal={journal} />
          ))}
        </div>)}
        

        {/* Pagination controls */}
        <div className="flex justify-center gap-4 mt-1 mb-20">
         
          <button
            onClick={handlePreviousPage}
            disabled={page <= 1}                  
            className="px-4 py-1 text-sm font-medium text-white bg-[#BA324F] rounded-md disabled:opacity-50">
                  <Icon icon="si:arrow-left-fill" width="24px" height="24px"  style={{color: "#ffffff"}} />

          </button>
        
          <span className="mx-2 px-4 py-1 bg-gray-200 text-gray-800 rounded flex items-center justify-center">
          {page}
        </span>
         
          <button
            onClick={handleNextPage}
                  disabled={page >= totalPages}
                  className="px-4 py-1 text-sm font-medium text-white bg-[#BA324F] rounded-md disabled:opacity-50">
                  <Icon icon="si:arrow-right-fill" width="24px" height="24px"  style={{color: "#ffffff"}} />

                </button>
        </div>
      </div>
    </>
  );
}

export default MyJournal;
