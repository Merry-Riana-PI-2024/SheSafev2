import { Icon } from "@iconify/react/dist/iconify.js"
import AddForm from "../components/Cases/addForm"
import asset from "../assets/images/asset_login.png";


function AddCases (){
    return (
        <>
         <div className={`wrapper-mobile bg-white `}>
    <div className={`flex pt-10 px-5 items-center justify-between`}>
          <Icon
            icon="ep:arrow-left-bold"
            width="32"
            height="32"
            style={{ color: "#BA324F" }}
          />
          <p className="text-black text-xl">Formulir Pengajuan Kasus</p>
          <div> </div>
        </div>

        <div className={`px-5 mt-10 pb-[6rem]`}>
            <AddForm />
        </div>
        
        <div className={`flex flex-col justify-center items-center gap-4`}>
          <img src={asset} alt="" />
        </div>
        
    </div>
        </>
    )
}

export default AddCases