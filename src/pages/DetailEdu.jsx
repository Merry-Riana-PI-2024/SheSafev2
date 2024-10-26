import { Icon } from "@iconify/react/dist/iconify.js"
import Detail from "../components/Education/Detail"

function DetailEdu (){
    return(<>
    <div className={`wrapper-mobile bg-white `}>
    <div className={`flex pt-10 px-5 items-center justify-between`}>
          <Icon
            icon="ep:arrow-left-bold"
            width="32"
            height="32"
            style={{ color: "#BA324F" }}
          />
          <p className="text-black text-xl"> Detail</p>
          <div> </div>
        </div>

        <div className={`px-5 mt-10 pb-[6rem]`}>
          <Detail />

        </div>
    </div>
    
    </>)
}

export default DetailEdu