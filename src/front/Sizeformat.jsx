import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sizeformat.css";
const Sizeformat = () => {
    let navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    return (
       <div className="Page_root Formaterror">
            
            <div>
            <div className="Formaterror_messadge_wrapper">
                <p className="errformat">
                Неподходящий формат изображения, допустимый формат BMP{" "}
                </p>
            </div>
            </div>
            <div className="flex-row">
                 <span>   
                </span>
                <button onClick={goHome} className="button">
             <span className="button_caption">Назад</span>
         </button>
         </div>   
        </div>
    );
};

export default Sizeformat;
