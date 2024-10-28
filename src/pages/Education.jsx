import { Icon } from "@iconify/react/dist/iconify.js"
import Card from "../components/Education/Card"

function Education (){
    return (<>
    <div className={`wrapper-mobile bg-white `}>
    <div className={`flex pt-10 px-5 items-center justify-between`}>
          <Icon
            icon="ep:arrow-left-bold"
            width="32"
            height="32"
            style={{ color: "#BA324F" }}
          />
          <p className="text-black text-xl"> Modul Edukasi</p>
          <div> </div>
        </div>

        <div className={`px-5 mt-10 pb-[6rem] columns-2 justify-center items-center`}>
            <Card />
            <Card />
            <Card />
            <Card />

        </div>
    </div>
    </>)
}

export default Education