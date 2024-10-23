import style from "../../assets/css/HomePage.module.css"

function EmergencyInfo () {
    return (<>
      <div className={`${style['emergency-section']}`}>
        <div className={`${style['emergency-heading']}`}>
          <h4 className={`text-xl`}>Info Pusat Bantuan</h4>
        </div>
        <div className={`${style['emergency-content']}`}>
   

          <div className={`${style['emergency-card']} mx-1`}>
            <div className={`${style['info-telp']}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M16.5559 12.906L16.1009 13.359C16.1009 13.359 15.0179 14.435 12.0629 11.497C9.10788 8.55898 10.1909 7.48298 10.1909 7.48298L10.4769 7.19698C11.1839 6.49498 11.2509 5.36698 10.6339 4.54298L9.37388 2.85998C8.60988 1.83998 7.13488 1.70498 6.25988 2.57498L4.68988 4.13498C4.25688 4.56698 3.96688 5.12498 4.00188 5.74498C4.09188 7.33198 4.80988 10.745 8.81388 14.727C13.0609 18.949 17.0459 19.117 18.6749 18.965C19.1909 18.917 19.6389 18.655 19.9999 18.295L21.4199 16.883C22.3799 15.93 22.1099 14.295 20.8819 13.628L18.9719 12.589C18.1659 12.152 17.1859 12.28 16.5559 12.906Z"
                  fill="#BA324F" />
              </svg>
              <h5>1500-899</h5>
            </div>

            <div className={`${style['info-title']}`}>
              <p>Darurat KDRT</p>
            </div>
          </div>

          <div className={`${style['emergency-card']} mx-1`}>
            <div className={`${style['info-telp']}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M16.5559 12.906L16.1009 13.359C16.1009 13.359 15.0179 14.435 12.0629 11.497C9.10788 8.55898 10.1909 7.48298 10.1909 7.48298L10.4769 7.19698C11.1839 6.49498 11.2509 5.36698 10.6339 4.54298L9.37388 2.85998C8.60988 1.83998 7.13488 1.70498 6.25988 2.57498L4.68988 4.13498C4.25688 4.56698 3.96688 5.12498 4.00188 5.74498C4.09188 7.33198 4.80988 10.745 8.81388 14.727C13.0609 18.949 17.0459 19.117 18.6749 18.965C19.1909 18.917 19.6389 18.655 19.9999 18.295L21.4199 16.883C22.3799 15.93 22.1099 14.295 20.8819 13.628L18.9719 12.589C18.1659 12.152 17.1859 12.28 16.5559 12.906Z"
                  fill="#BA324F" />
              </svg>
              <h5>1500-899</h5>
            </div>

            <div className={`${style['info-title']}`}>
              <p>Darurat KDRT</p>
            </div>
          </div>

     
        </div>
      </div>
    </>)
}

export default EmergencyInfo