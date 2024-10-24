import { Icon } from "@iconify/react/dist/iconify.js";
import foto from "../../assets/images/fp1.png";

function Card() {
  return (
    <>
      <div className={`px-5 py-2 my-2`}>
        <div className={`px-5 py-6  bg-white rounded-t-[10px] box-shadow: shadow-sm shadow-md; `}>

          <div className={`flex flex-row gap-8  items-center justify-start `}>
            <img src={foto} />
            <div className={`flex flex-col gap-1`}>
              <h6 className={`text-[#BA324F] font-bold text-md`}>Anonim</h6>
              <p className={`text-[#8c8c8c] font-light`}>
                11 Oktober 2024 | 02:40pm
              </p>
            </div>
          </div>

          <div className={`flex flex-col gap-2 ustify-items-start mt-5 `}>
            <h5 className={`text-black text-md font-bold`}>
              Saya Butuh Pertolongan: Terjebak dalam Lingkaran Kekerasan
            </h5>
            <p className={`text-[#8c8c8c] font-medium`}>
              Saya tidak tahu harus berbuat apa lagi. Setiap hari, saya hidup
              dalam ketakutan karena pasangan saya sering menyakiti saya, baik
              secara fisik maupun emosional. Saya merasa terjebak dan tidak
              punya tempat untuk lari.
            </p>
            <h5 className={`text-[#BA324F] font-bold text-md text-left`}>#KDRT</h5>
          </div>
        </div>

        <div
          className={`flex flex-row bg-[#f5f5f5] justify-between items-center px-5 py-3 rounded-b-[10px]`}>
          <div className={`flex gap-2`}>
            <Icon
              icon="lets-icons:comment-light"
              width="24"
              height="24"
              style={{ color: "#8c8c8c" }}
            />
            <p className={`text-[#8c8c8c]`}>100 Komentar</p>
          </div>

          <div className={`flex gap-2 border-2 border-[#BA324F] rounded-[10px] px-2 py-2`}>
          <Icon icon="mingcute:love-line" width="24" height="24"  style={{color: "#BA324F"}} />
            <p className={`text-[#BA324F]`}>100 Dukungan</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Card;
