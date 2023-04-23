import React from "react";
import { useNavigate } from "react-router-dom";

const Resultencrypt = ({image}) => {
    let navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    return (
        <div className="img4">
            <div>
                <div className="shifrovanieitog">
                    <img src={image}/>
                </div>
                <button className="buttonnazad" onClick={goHome}>
                    Назад
                </button>
                <button className="buttonsohr"> Сохранить</button>
            </div>
        </div>
    );
};

export default Resultencrypt;
