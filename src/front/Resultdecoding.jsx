import React from "react";
import { useNavigate } from "react-router-dom";

const Resultdecoding = ({text}) => {
    let navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    return (
        <div className="img4">
            <div>
                 <textarea value={text} className="shifrtext"> </textarea>
                <p className="shifrtext2">{text}</p>
                <button className="buttonnazad" onClick={goHome}>
                    Назад
                </button>
                <button>Сохранить</button>
            </div>
        </div>
    );
};

export default Resultdecoding;
