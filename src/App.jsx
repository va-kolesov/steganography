import React from "react";

import { HashRouter, Routes, Route } from "react-router-dom";
import Main from "./front/Main";
import Decoding from "./front/Decoding";
import Encrypt from "./front/Encrypt";
import Resultencrypt from "./front/Resultencrypt";
import Resultdecoding from "./front/Resultdecoding";
import Sizeerror from "./front/Sizeerror";
import Sizeformat from "./front/Sizeformat";
import ApiDemo from "./ApiDemo";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="decoding" element={<Decoding />} />
                <Route path="encrypt" element={<Encrypt />} />
                <Route path="resultencrypt" element={<Resultencrypt />} />
                <Route path="resultdecoding" element={<Resultdecoding />} />
                <Route path="sizeerror" element={<Sizeerror />} />
                <Route path="sizeformat" element={<Sizeformat />} />
                <Route path="demo" element={<ApiDemo />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
