import { Icon } from "@iconify/react/dist/iconify.js";
import foto from "../../assets/images/fp1.png";
import Commentar from "./Commentar";

function DetailContent() {
  return (
    <>
      <div className={`flex flex-row gap-8  items-center justify-start `}>
        <img src={foto} />
        <div className={`flex flex-col gap-1`}>
          <h6 className={`text-[#BA324F] font-bold text-md`}>Anonim</h6>
          <p className={`text-[#8c8c8c] font-light`}>
            11 Oktober 2024 | 02:40pm
          </p>
        </div>
      </div>

      <div className={`mt-6`}>
        <h6 className={`text-[#BA324F] font-bold text-m`}>
          #Kekerasan Dalam Rumah Tangga (KDRT)
        </h6>
      </div>

      <div className={`flex flex-col gap-4 mt-1`}>
        <h5 className={`text-black text-lg font-bold `}>
          Terjebak dalam Kekerasan, Bagaimana Cara Saya Bisa Keluar?
        </h5>

        <p className={`text-black font-light text-sm`}>
          Sudah tiga bulan terakhir ini, saya menghadapi kekerasan dalam rumah
          tangga yang membuat saya semakin tertekan. Setiap kali ada masalah,
          pasangan saya lebih sering meluapkan amarahnya dengan kata-kata kasar
          dan tindakan fisik. Saya merasa takut untuk melawan atau sekadar
          berbicara karena khawatir akan memperparah situasi.
        </p>

        <p className={`text-black font-light text-sm`}>
          Di awal, saya mencoba untuk bersabar, berharap ia akan berubah. Namun,
          setelah beberapa kali insiden, saya menyadari bahwa kondisi ini
          berisiko bagi kesehatan mental dan fisik saya. Saya merasa terisolasi,
          tidak tahu harus bicara dengan siapa, apalagi memutuskan untuk pergi.
          Pada satu sisi, saya ingin bebas, namun di sisi lain, saya takut
          dampaknya pada anak-anak dan keluarga kami.
        </p>

        <p className={`text-black font-light text-sm`}>
          Melalui SheSafe, saya berharap bisa menemukan dukungan, saran, atau
          mungkin solusi dari mereka yang pernah berada di posisi saya atau
          memahami situasi ini. Saya benar-benar butuh bantuan untuk bisa
          menemukan jalan keluar yang aman dan tepat.
        </p>

        <div className={`flex flex-col gap-2`}>
          {" "}
          <h5 className={`font-bold text-lg text-black `}>
            Dukungan Komunitas
          </h5>
          <div className={`flex gap-2`}>
            <Icon
              icon="mingcute:love-line"
              width="24"
              height="24"
              style={{ color: "#BA324F" }}
            />
            <p className="text-[#BA324F] text-md">100 Dukungan</p>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col gap-1 mt-10  px-4 py-2 rounded-[10px] bg-[#F8EBED]`}>
        <p className={`font-bold text-sm text-[#BA324F]`}>Catatan:</p>
        <p className={`font-light text-sm text-[#BA324F]`}>
          Kasus ini telah diajukan oleh pengguna berdasarkan jurnal pribadi yang
          telah ditulis beberapa kali terkait pengalaman kekerasan yang
          dialaminya. Setelah diverifikasi oleh admin, kasus ini dipublikasikan
          untuk mendapatkan dukungan dan saran dari komunitas SheSafe.
        </p>
      </div>

      <div className={`mt-10 pb-[5rem]`}>
        <h6 className={`text-black font-bold text-lg`}>Komentar (3)</h6>
        <Commentar />
        <Commentar />
        <Commentar />
      </div>
    </>
  );
}

export default DetailContent;
