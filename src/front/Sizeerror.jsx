import React from "react";
import { useNavigate } from "react-router-dom";

const Sizeerror = () => {
    let navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    return (
        <div className="img5">
            <div className="errsize">
                <p className="errsizep">
                    Слишком большое сообщение для изображения с таким размером{" "}
                </p>
            </div>
            <div>
                <button className="buttonnazad" onClick={goHome}>
                    Назад
                </button>
            </div>
        </div>
    );
};

export default Sizeerror;
