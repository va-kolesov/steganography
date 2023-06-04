import React from "react";
import { useNavigate } from "react-router-dom";
import "./Encrypt.css";

const IS_PROD = window.location.href.indexOf('github') !== -1;
const IMG_FOLDER = IS_PROD ? 'assets' : 'src/front/img';

const Encrypt = ({ onEncrypt }) => {
    const [value, setValue] = React.useState("");
    const [image, setImage] = React.useState(`${IMG_FOLDER}/cap.bmp`);

    let navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    const encrypt = () => {
        onEncrypt(image, value);
        navigate("/resultencrypt");
    };

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="Page_root Encrypt">
            <div className="Encrypt_header">
                <span className="Encrypt_header_text">Шифрование</span>
            </div>

            <div className="flex-row Page_body">
                <div className="Encrypt_textarea_wrapper">
                    <textarea
                        cols="40"
                        rows="5"
                        value={value}
                        onChange={handleChange}
                        className="Encrypt_textarea"
                    ></textarea>
                    <div className="Encrypt_textarea_placeholder">Текст</div>
                </div>
                <div
                    className="Encrypt_image_wrapper"
                    onClick={() => {
                        var input = document.createElement("input");
                        input.type = "file";
                        input.accept = ".bmp";
                        input.onchange = onImageChange;
                        input.click();
                    }}
                >
                    {image && (
                        <img
                            className="Encrypt_image"
                            src={image}
                            alt="preview image"
                        />
                    )}
                    {!image && (
                        <p className="Encrypt_image_placeholder">Изображение</p>
                    )}
                </div>
            </div>
            <div className="flex-row">
                <button
                    disabled={!value || !image}
                    onClick={encrypt}
                    className="button"
                >
                    <span className="button_caption">Применить</span>
                </button>
                <button onClick={goHome} className="button">
                    <span className="button_caption">Назад</span>
                </button>
            </div>
        </div>
    );
};

export default Encrypt;
