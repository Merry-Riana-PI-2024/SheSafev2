import AddForm from "../components/Journal/addForm";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";


function AddJurnal() {
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper-mobile">
      <div className="text-center mx-5 py-2 items-center gap-4 flex justify-between">
            <button onClick={() => navigate(-1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="5rem"
                viewBox="0 0 12 24">
                <path
                  fill="#8c263b"
                  fillRule="evenodd"
                  d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z"
                />
              </svg>
            </button>
            <h1 className={`font-medium text-xl`}>Formulir Jurnal</h1>
            <div></div>
          </div>

        <AddForm />
      </div>
    </>
  );
}

export default AddJurnal;
