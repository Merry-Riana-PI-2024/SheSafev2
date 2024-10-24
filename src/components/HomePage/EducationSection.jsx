import style from "../../assets/css/HomePage.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function EducationSection() {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, right: "-5px", zIndex: "10", top:"40%" }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, left: "-10px", zIndex: "10", top:"40%"}}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: true, 
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: true, 
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true, 
        },
      },
    ],
  };

  return (
    <>
      <div className={`${style["tips-section"]} pb-[7rem]`}>
        <div className={`${style["tips-title"]} flex justify-between`}>
          <h4 className={`text-xl`}>Modul Edukasi</h4>
          <p className={`text-[#BA324F]`}>selengkapnya</p>
        </div>

        <div className={`${style["tips-content"]} silder-container mb-5`}>
          <Slider {...settings} >
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

            <div className={`${style["tips-card"]}`}>
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

            <div className={`${style["tips-card"]} `}>
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
          </Slider>
        </div>
      </div>
    </>
  );
}

export default EducationSection;
