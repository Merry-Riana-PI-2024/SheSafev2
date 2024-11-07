import foto from "../../assets/images/fp1.png";

function Commentar({ commentar, delCom }) {
  return (
    <>
      <div className={`mt-5 bg-[#f5f5f5] rounded-[10px] px-4 py-3`}>
        <div className={`flex flex-row gap-8  items-center justify-start `}>
          {/* {!commentar.createdBy.avatar ? (  <img src={foto} />) : (<img className={`rounded w-[30px]`} src={`https://res.cloudinary.com/dut3hehdr/image/upload/v1730657531/${commentar.createdBy.avatar}`}/>)} */}
          <img src={foto} />
          <div className={`flex flex-col gap-1`}>
            <h6 className={`text-[#BA324F] font-bold text-md`}>
              {commentar.createdBy.fullName}
            </h6>
            <p className={`text-[#8c8c8c] font-light`}>{commentar.created}</p>
          </div>
        </div>
        <p className={`text-black text-sm font-light mt-3`}>
          {commentar.description}
        </p>
        <div className="flex justify-between">
          <div></div>
          <div></div>

          <div>{delCom}</div>
        </div>
      </div>
    </>
  );
}

export default Commentar;
