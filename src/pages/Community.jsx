import { useEffect, useState } from "react";
import Card from "../components/Community/Card";
import NavBottom from "../components/NavBottom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommunity } from "../features/communitySlice";
import { fetchCategories, selectCategories } from "../features/categoriesSlice";

function Community() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.communities);
  const community = useSelector((state) => state.communities.community);
  const category = useSelector((state) => state.categories.category);

  useEffect(() => {
    dispatch(fetchCommunity());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      <div className={`bg-white wrapper-mobile `}>
        <div className={`flex justify-between mx-5 pt-10`}>
          <h2 className={`text-black text-xl font-bold`}>Postingan</h2>
          <select
            className={`bg-[#BA324F] rounded-[10px] text-white px-4 py-2`}>
            <option value="">Pilih Kategori</option>
            {category && category.length > 0 ? (
              category.map((cat) => (
                <option value={cat._id} key={cat._id}>
                  {cat.name}
                </option>
              ))
            ) : (
              <option value="">Tidak ada kategori</option>
            )}
          </select>
        </div>
        <div className={`pb-[5rem]`}>
          {loading ? (
            <div>
              {new Array(community.length).fill(null).map((_, index) => (
                <div key={index}>
                  <div className="space-y-4 mx-5 mt-10">
                    <div className="flex justify-between gap-4 w-full">
                      <div className="h-[60px] w-[80px] bg-gray-300 animate-pulse rounded-md"></div>
                      <div className="h-[60px] w-full bg-gray-300 animate-pulse rounded-md"></div>
                    </div>
                    <div className="flex justify-between gap-4 w-full">
                      <div className="h-[20px] w-[100px] bg-gray-300 animate-pulse rounded-md"></div>
                      <div className="h-[20px] w-[100px] bg-gray-300 animate-pulse rounded-md"></div>
                    </div>
                    <div className="h-8 bg-gray-300 animate-pulse rounded-md"></div>
                    <div className="h-[200px] bg-gray-300 animate-pulse rounded-md"></div>
                    <div className="h-8 bg-gray-300 animate-pulse rounded-md"></div>
                    <div className="h-6 bg-gray-300 animate-pulse rounded-md"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : community.length === 0 ? (
            <h1 className="mx-5 my-3">Belum ada kasus yang dibagikan</h1>
          ) : (
            community.map((items) => <Card data={items} key={items._id} />)
          )}
        </div>
      </div>
      <NavBottom />
    </>
  );
}

export default Community;
