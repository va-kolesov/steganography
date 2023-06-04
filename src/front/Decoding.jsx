import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Decoding.css";
const Decoding = ({ onDecoding }) => {
    const [image, setImage] = React.useState(null);
    let navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    };
    const decoding = () => {
        onDecoding(image);
        navigate("/resultdecoding");
    };

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    const onButtonClick = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
    };

    const [value, setValue] = React.useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="Page_root Decoding">
            <div className="Decoding_header">
                <span className="Decoding_header_text">Расшифровка</span>
            </div>
            <div
                className="Decoding_image_wrapper"
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
                        className="Decoding_image "
                        src={image}
                        alt="preview image"
                    />
                )}
                {!image && (
                    <p className="Decoding_image_placeholder">Изображение</p>
                )}
            </div>

            <div className="flex-row">
                <button disabled={!image} onClick={decoding} className="button">
                    <span className="button_caption">Применить</span>
                </button>
                <button onClick={goHome} className="button">
                    <span className="button_caption">Назад</span>
                </button>
            </div>
        </div>
    );
};

export default Decoding;
