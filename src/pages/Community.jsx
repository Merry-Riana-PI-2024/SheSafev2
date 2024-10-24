import Card from "../components/Community/Card";
import NavBottom from "../components/NavBottom";

function Community() {
  return (
    <>
      <div className={`bg-white wrapper-mobile `}>
        <div className={`flex justify-between mx-5 pt-10`}>
          <h2 className={`text-black text-xl font-bold`}>Postingan</h2>

          <select
            className={`bg-[#BA324F] rounded-[10px] text-white px-4 py-2`}>
            <option value="">Pilih Ktegori</option>
          </select>
        </div>
        <div className={`pb-[5rem]`}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <NavBottom />
    </>
  );
}

export default Community;
