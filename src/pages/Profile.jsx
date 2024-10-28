import foto from "../assets/images/fp1.png";
import NavBottom from "../components/NavBottom";

function Profile() {
  return (
    <>
      <div className={`bg-white wrapper-mobile `}>
        <div className={`pt-10 mx-5`}>
          <div
            className={`flex flex-col gap-8 justify-center  items-center justify-start `}>
            <img className={`w-[100px]`} src={foto} />
            <div className={`flex flex-col items-center justify-center gap-1`}>
              <h6 className={`text-[#BA324F] font-bold text-xl`}>
                Rusydina Novitasari
              </h6>
              <p className={`text-[#8c8c8c] font-light text-md`}>
                rnvitas697@gmail.com
              </p>
            </div>
          </div>

          <div className={`border-2 border-[#f5f5f5] rounded-[10px] mt-10 px-5 py-2 flex gap-10 justify-between items-center`}>
            <div className={`flex gap-4 px-3 py-3`}>
                <h6 className={`text-md text-black`}>Edit Profile</h6>
            </div>

            <div className={`flex gap-4 px-3 py-3`}>
            <h6 className={`text-md text-black`}>Keluar Akun</h6>
            </div>

          </div>
        </div>

        <NavBottom />
      </div>
    </>
  );
}

export default Profile;
