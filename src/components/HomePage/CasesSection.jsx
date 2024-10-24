import style from "../../assets/css/HomePage.module.css"
import Card from "./Card"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

function CasesSection (){
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
  const cards = [<Card />]; 
  var settings = {
    dots: true,
    infinite: cards.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    vertical:false
    
  };

    return (<>
      <div className={`${style['cases-section']}`}>
        <div className={`${style['cases-heading']}`}>
          <h4 className={`text-xl`}>Cerita Perempuan</h4>
          <a href="">Selengkapnya</a>
        </div>

        <div className={`${style['cases-info']} mt-2`}>
          <p>
            Lihat kisah nyata dari para perempuan pemberani. Dukung mereka
            dengan memberikan semangat atau bagikan pengalamanmu sendiri
          </p>
        </div>

        <div className={`${style['cases-content']} my-3 slider-container`}>
          <Slider {...settings} >   
               
              <Card />
           

          </Slider>
        </div>
      </div>
    </>)
}

export default CasesSection