import React from "react";
import { useNavigate } from "react-router-dom";
import "./Resultencrypt.css";
const Resultencrypt = ({ image }) => {
    let navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    function handleClick() {
        // создаем ссылку на картинку
        const link = document.createElement("a");
        link.href = image;
        link.download = "download.bmp";
        // добавляем ссылку на страницу и симулируем клик
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="Page_root Resultencrypt">
            <div className="Resultencrypt_image_wrapper">
                <img src={image} />
            </div>
            <div className="flex-row">
                <button onClick={handleClick} className="button">
                    <span className="button_caption">Сохранить</span>
                </button>

                <button onClick={goHome} className="button">
                    <span className="button_caption">Назад</span>
                </button>
            </div>
        </div>
    );
};

export default Resultencrypt;
