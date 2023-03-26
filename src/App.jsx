import React, { useState } from "react";
import { encode } from "./Algorithm/lsb";

export default () => {
    const [result, setResult] = useState(null);
    const message = `1234567890 TEST test ПРОВЕРКА проверка!"№;%:?*()`;
    const image = "resources/test.bmp";
    if (!result) {
        encode(message, image, true).then((url) => {
            setResult(url);
    });
    }
    return (
        <>
            <h3>Тут будет приложение</h3>
            <div>тестовое изображение:</div>
            <img
                src={image}
                style={{
                    width: "256px",
                    imageRendering: "pixelated",
                }}
            ></img>
            <div>тестовое сообщение:{message}</div>
            {result && (
                <>
                    <div>результат:</div>
                    <img
                        src={result}
                        style={{
                            width: "256px",
                            imageRendering: "pixelated",
                        }}
                    ></img>
                </>
            )}
        </>
    );
};
