import { Icon } from "@iconify/react/dist/iconify.js";
import DetailContent from "../components/Community/DetailContent";
import NavCom from "../components/Community/NavCom";


function DetailCom() {
  return (
    <>
      <div className={`bg-white wrapper-mobile`}>
        <div className={`flex pt-10 px-5 items-center justify-between`}>
          <Icon
            icon="ep:arrow-left-bold"
            width="32"
            height="32"
            style={{ color: "#BA324F" }}
          />
          <p className="text-black text-xl"> Detail Cerita</p>
          <div> </div>
        </div>

        <div className={`px-5 mt-10 pb-[6rem]`}>
          <DetailContent />
        </div>
        <NavCom />
      </div>
    </>
  );
}

export default DetailCom;
