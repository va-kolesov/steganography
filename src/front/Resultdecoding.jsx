import React from "react";
import { useNavigate } from "react-router-dom";

const Resultdecoding = () => {
    let navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    return (
        <div class="img4">
            <div>
                <fieldset cols="40" rows="5" class="shifrtext"></fieldset>
                <p className="shifrtext2">Зашифрованный текст</p>
                <button className="buttonnazad" onClick={goHome}>
                    Назад
                </button>
                <button>Сохранить</button>
            </div>
        </div>
    );
};

export default Resultdecoding;
