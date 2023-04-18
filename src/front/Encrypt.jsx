import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect, useRef } from "react";

const Encrypt = () => {
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

    const [value, setValue] = React.useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div class="img3">
            <div className="shifrovanie">
                <p className="shifrovanie2">Шифрование</p>
            </div>
            <button onClick={goHome} class="nazad">
                Назад
            </button>

            <form onSubmit={(e) => e.preventDefault()} action="">
                <textarea
                    name="Text1"
                    cols="40"
                    rows="5"
                    value={value}
                    onChange={handleChange}
                    class="field-type"
                ></textarea>

                <p class="text66">Текст</p>

                <div class="hh"></div>

                {image && <img class="hh" src={image} alt="preview image" />}

                <label class="R">
                    <input
                        type="file"
                        accept=".bmp"
                        onChange={onImageChange}
                        className="filetype"
                    />
                    <p className="textinput">Изображение</p>
                </label>

                <Link to="/resultencrypt">
                    <button disabled={!value || !image} className="primenit">
                        Применить
                    </button>{" "}
                </Link>
            </form>
        </div>
    );
};

export default Encrypt;
