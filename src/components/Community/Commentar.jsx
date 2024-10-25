import foto from "../../assets/images/fp1.png";

function Commentar (){
    return (<>
    <div className={`mt-5 bg-[#f5f5f5] rounded-[10px] px-4 py-3`}>
    <div className={`flex flex-row gap-8  items-center justify-start `}>
        <img src={foto} />
        <div className={`flex flex-col gap-1`}>
          <h6 className={`text-[#BA324F] font-bold text-md`}>Anonim</h6>
          <p className={`text-[#8c8c8c] font-light`}>
            11 Oktober 2024 | 02:40pm
          </p>
        </div>
      </div>
      <p className={`text-black text-sm font-light mt-3`}>Saya pernah mengalami hal yang sama. Jangan takut untuk meminta bantuan, coba cari dukungan dari keluarga atau teman terdekat.</p>
    </div>
    </>)
}

export default Commentar