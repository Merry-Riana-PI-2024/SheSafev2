import style from "../../assets/css/HomePage.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardEdu from "./CardEdu";

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

  const cards =[<CardEdu/>]
  var settings = {
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
    <>
      <div className={`${style["tips-section"]} pb-[7rem]`}>
        <div className={`${style["tips-title"]} flex justify-between`}>
          <h4 className={`text-xl`}>Modul Edukasi</h4>
          <p className={`text-[#BA324F]`}>selengkapnya</p>
        </div>

        <div className={`${style["tips-content"]} silder-container mb-5`}>
          <Slider {...settings} >
           
            <CardEdu />
            <CardEdu />
            <CardEdu />

          </Slider>
        </div>
      </div>
    </>
  );
}

export default EducationSection;
