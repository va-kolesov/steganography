import React from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./front/Main";
import Decoding from "./front/Decoding";
import Encrypt from "./front/Encrypt";
import Resultencrypt from "./front/Resultencrypt";
import Resultdecoding from "./front/Resultdecoding";
import Sizeerror from "./front/Sizeerror";
import Sizeformat from "./front/Sizeformat";
import ApiDemo from "./ApiDemo";
import { encode, excract } from "./Algorithm/lsb";

function App() {
    const [encryptImage, setEncryptImage] = React.useState('');
    const [encryptText, setEncryptText] = React.useState('');
    const [resultImage, setResultImage] = React.useState('');
    const [decodingImage, setDecodingImage] = React.useState('');
    const [resultText, setResultText] = React.useState('');
    const navigate = useNavigate();
    const onEncrypt = async (img, txt) => {
        setEncryptImage(img);
        setEncryptText(txt);
        try {
            const result = await encode(txt, img);
            setResultImage(result);
        } catch (err){
            if (err?.code === 1) {
                navigate('/sizeformat');
            }
            if (err?.code === 2) {
                navigate('/sizeerror');
            }
        }
    }
    const onDecoding = async (img) => {
        try {
            setDecodingImage(img);
            const  messange= await excract(img);
            setResultText(messange);
        } catch (err){
            if (err?.code === 1) {
                navigate('/sizeformat');
            }
            if (err?.code === 2) {
                navigate('/sizeerror');
            }
        }
    }
    return (
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="decoding" element={<Decoding onDecoding={onDecoding}/>} />
                <Route path="encrypt" element={<Encrypt onEncrypt={onEncrypt}/>} />
                <Route path="resultencrypt" element={<Resultencrypt image={resultImage}/>} />
                <Route path="resultdecoding" element={<Resultdecoding text={resultText}/>} />
                <Route path="sizeerror" element={<Sizeerror />} />
                <Route path="sizeformat" element={<Sizeformat />} />
                <Route path="demo" element={<ApiDemo />} />
            </Routes>
    );
}

export default App;
