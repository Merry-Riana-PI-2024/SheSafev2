import { Icon } from "@iconify/react/dist/iconify.js";

function NavCom() {
  return (
    <>
      <div className={`flex shadow-lg justify-center items-center `}>
        <div  style={{ boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.1)' }}className={`fixed bottom-0 px-5  w-[480px] max-[576px]:w-[375px] rounded-t-[10px] bg-white flex justify-between items-center px-5 py-3`}>
        
          <div
            className={`flex justify-between items-center gap-2 border-2 border-[#BA324F] rounded-[10px] px-2 py-2`}>
            <Icon
              icon="mingcute:love-line"
              width="24"
              height="24"
              style={{ color: "#BA324F" }}
            />
            <p className={`text-[#BA324F]`}>Berikan Dukungan</p>
          </div>

          <div className={`flex justify-between items-center bg-[#ba324f] border-2 border-[#ba324f] px-2 py-2 rounded-[10px] gap-2`}>
          <Icon icon="hugeicons:comment-add-01" width="24" height="24"  style={{color: "#ffffff"}} />
            <p className={`text-sm text-[#ffffff]`}>Tambah Komentar</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavCom;
