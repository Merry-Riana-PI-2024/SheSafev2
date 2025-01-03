import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../../assets/css/HomePage.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardEdu from "./CardEdu";
import { useNavigate } from "react-router-dom";
import { fetchEdu } from "../../features/eduSlice";

function EducationSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { edu, loading, error } = useSelector((state) => state.educations);

  useEffect(() => {
    dispatch(fetchEdu());
  }, [dispatch]);

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, right: "-5px", zIndex: "10", top: "40%" }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, left: "-10px", zIndex: "10", top: "40%" }}
        onClick={onClick}
      />
    );
  }

  const cards = Array.isArray(edu) ? edu.slice(0, 4) : [];

  const settings = {
    dots: true,
    infinite: cards.length > 1,
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
    <div className={`${style["tips-section"]} pb-[2rem]`}>
      <div className={`${style["tips-title"]} flex justify-between`}>
        <h4 className={`text-xl`}>Modul Edukasi</h4>
        <p
          className={`text-[#BA324F] cursor-pointer`}
          onClick={() => navigate("/education")}>
          selengkapnya
        </p>
      </div>

      <div className={`${style["tips-content"]} silder-container mb-5`}>
        {loading ? (
              <Slider {...settings}>
              {[...Array(6)].map((_, index) => (
                <div className="px-3">
                <div
                  className="w-full h-48 bg-gray-200 rounded-lg animate-pulse"
                  key={index}>
                  <div className="w-full h-32 bg-gray-300 rounded-t-lg mb-4"></div>
                  <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                </div>
                </div>
              ))}
            </Slider>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <Slider {...settings}>
            {cards.map((item, index) => (
              <CardEdu key={index} data={item} />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default EducationSection;
