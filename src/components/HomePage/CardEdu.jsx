import style from "../../assets/css/HomePage.module.css";

function CardEdu() {
  return (
    <>
      <div className={`${style["tips-card"]}  `}>
        <div className={`${style.image}`}>
          <img
            className="img-fluid"
            src="https://img.freepik.com/free-vector/flat-women-s-history-month-illustration_23-2149301501.jpg?t=st=1726025478~exp=1726029078~hmac=72d4b65f1ee84b90f2ce7a72951155f5f7429a7fc225f3e4b5fa5d2bfee2a7e7&w=740"
          />
        </div>

        <div className={`${style.title}`}>
          <h6>Strategi Menghindari Situasi Beresiko</h6>
        </div>
      </div>
    </>
  );
}

export default CardEdu;
