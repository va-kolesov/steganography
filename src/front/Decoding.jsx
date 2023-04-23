import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect, useRef } from "react";
const Decoding = () => {
    const inputFile = useRef(null);
    let navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    const [image, setImage] = useState(null);

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
        <div className="img2">
            <div className="shifrovanie">
                <p className="shifrovanie2">Расшифровка</p>
            </div>
            <button onClick={goHome} className="buttonnazad">
                Назад
            </button>

            <form onSubmit={(e) => e.preventDefault()} action="">
                <div className="hh2"></div>

                {image && <img className="hh2" src={image} alt="preview image" />}

                <label className="R2">
                    <input
                        type="file"
                        accept=".bmp"
                        onChange={onImageChange}
                        className="filetype"
                    />
                    <p className="textinput2">Изображение</p>
                </label>

                <Link to="/resultdecoding">
                    <button disabled={!image} className="buttonsohr">
                        Применить
                    </button>{" "}
                </Link>
            </form>
        </div>
    );
};

export default Decoding;
