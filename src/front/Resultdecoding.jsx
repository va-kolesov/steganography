import React from "react";
import { useNavigate } from "react-router-dom";
import "./Resultdecoding.css";
const Resultdecoding = ({ text }) => {
    let navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    return (
        <div className="Page_root Resultdecoding">
            <div>
                <textarea
                    className="Resultdecoding_text_wrapper"
                    value={text}
                ></textarea>
            </div>
            <div className="flex-row">
                <span></span>
                <button onClick={goHome} className="button">
                    <span className="button_caption">Назад</span>
                </button>
            </div>
        </div>
    );
};

export default Resultdecoding;
