import React, { useState } from "react";
import { encode, excract } from "./Algorithm/lsb";

export default () => {
    const [resultImage, setResultImage] = useState(null);
    const [resultMessage, setResultMessage] = useState(null);
    const message = `1234567890 TEST test ПРОВЕРКА проверка!"№;%:?*()`;
    const image = "resources/test.bmp";
    if (!resultImage) {
        encode(message, image)
            .then((url) => {
                setResultImage(url);
            })
            .catch((error) => {
                alert(error);
            });
    }
    if (!resultMessage && resultImage) {
        excract(resultImage)
            .then((res) => {
                setResultMessage(res);
            })
            .catch((error) => {
                alert(error);
            });
    }
    return (
        <>
            <div>тестовое изображение:</div>
            <img
                src={image}
                style={{
                    width: "256px",
                    imageRendering: "pixelated",
                }}
            ></img>
            <div>
                тестовое сообщение:
                <p>{message}</p>
            </div>
            {resultImage && (
                <>
                    <div>результат:</div>
                    <img
                        src={resultImage}
                        style={{
                            width: "256px",
                            imageRendering: "pixelated",
                        }}
                    ></img>
                </>
            )}
            {resultMessage && (
                <div>
                    Результат расшифровки:
                    <p>{resultMessage}</p>
                </div>
            )}
        </>
    );
};
