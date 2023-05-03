import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sizeerror.css";
const Sizeerror = () => {
    let navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    return (
        <div className="Page_root Sizeerror">
           
               
        <div>
            <div className="Sizeerror_messadge_wrapper">
                <p className="errsize">
                    Слишком большое сообщение для изображения с таким размером{" "}
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

export default Sizeerror;
