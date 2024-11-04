import CardJournal from "../components/Journal/CardJournal";

function MyJournal() {
  return (
    <>
      <div className={`flex flex-col gap-8 `}>
        <div className={`flex justify-between items-center px-5 mt-10`}>
          <h4 className={`text-black text-lg font-bold`}>My Jurnal</h4>
          <select
            className={`bg-[#BA324F] rounded-[10px] text-white px-4 py-2`}>
            <option value="">Terbaru</option>
          </select>
        </div>

        <div className={`flex flex-col gap-3 items-center px-5`}>
            <CardJournal />
        </div>
      </div>
    </>
  );
}

export default MyJournal;
