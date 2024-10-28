import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../../assets/css/HomePage.module.css";
import Slider from "react-slick";
import { Icon } from "@iconify/react";

function EmergencyInfo() {
  const emergencyNumbers = ["1500-899", "021-5923185"];
  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false); 


  const copyToClipboard = (textToCopy) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setText(textToCopy);
        setIsCopied(!isCopied); 
        setTimeout(() => setIsCopied(false), 1000); 
      })
      .catch((err) => {
        console.error("Gagal menyalin teks: ", err);
      });
  };

  const handleClick = (number) => {
    copyToClipboard(number);
  };

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

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    vertical: false,
  };

  return (
    <>
      <div className={`${style["emergency-section"]} relative`}>
        <div className={`${style["emergency-heading"]}`}>
          <h4 className={`text-xl`}>Info Pusat Bantuan</h4>
        </div>
        
        
      <div className={`${style['success-message']} ${isCopied ? style.show : ''} absolute right-0 top-0 z-10 px-2 py-1 my-2 bg-[#BA324F] gap-2 text-white text-[12px] rounded-[10px] inline-flex justify-center items-center`}>
        <Icon
          icon="stash:copy-duotone"
          width="32"
          height="32"
          style={{ color: "#ffffff" }}
        />
        Nomor Berhasil Disalin
      </div>


        <div className={`${style["emergency-content"]} slider-container`}>
          <Slider {...settings}>
          


            <div
              className={`${style["emergency-card"]} mx-1`}
             >
              <div className={`${style["info-telp"]}`}>
                <div className={`flex gap-2 `}>
                  <Icon
                    icon="line-md:phone-twotone"
                    width="24"
                    height="24"
                    style={{ color: "#BA324F" }}
                  />
                  <h5>{emergencyNumbers[1]}</h5>
                </div>

                <Icon
                  icon="stash:copy-duotone"
                  width="32"
                  height="32"
                  style={{ color: "#BA324F", cursor:"copy" }}  onClick={() => handleClick(emergencyNumbers[1])}
                />
              </div>
              <div className={`${style["info-title"]}`}>
                <p>Darurat KDRT</p>
              </div>
            </div>

            <div
              className={`${style["emergency-card"]} mx-1`}
             >
              <div className={`${style["info-telp"]}`}>
                <div className={`flex gap-2 `}>
                  <Icon
                    icon="line-md:phone-twotone"
                    width="24"
                    height="24"
                    style={{ color: "#BA324F" }}
                  />
                  <h5>{emergencyNumbers[1]}</h5>
                </div>

                <Icon
                  icon="stash:copy-duotone"
                  width="32"
                  height="32"
                  style={{ color: "#BA324F", cursor:"copy" }}  onClick={() => handleClick(emergencyNumbers[1])}
                />
              </div>
              <div className={`${style["info-title"]}`}>
                <p>Darurat KDRT</p>
              </div>
            </div>
            
            <div
              className={`${style["emergency-card"]} mx-1`}
             >
              <div className={`${style["info-telp"]}`}>
                <div className={`flex gap-2 `}>
                  <Icon
                    icon="line-md:phone-twotone"
                    width="24"
                    height="24"
                    style={{ color: "#BA324F" }}
                  />
                  <h5>{emergencyNumbers[1]}</h5>
                </div>

                <Icon
                  icon="stash:copy-duotone"
                  width="32"
                  height="32"
                  style={{ color: "#BA324F", cursor:"copy" }}  onClick={() => handleClick(emergencyNumbers[1])}
                />
              </div>
              <div className={`${style["info-title"]}`}>
                <p>Darurat KDRT</p>
              </div>
            </div>

          </Slider>
        </div>

      </div>
    </>
  );
}

export default EmergencyInfo;
