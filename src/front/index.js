import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Decoding from "./Decoding";

import Encrypt from "./Encrypt";
import Resultencrypt from "./Resultencrypt";
import Resultdecoding from "./Resultdecoding";
import Sizeerror from "./Sizeerror";
import Sizeformat from "./Sizeformat";
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="decoding" element={<Decoding />} />
      <Route path="encrypt" element={<Encrypt />} />
      <Route path="resultencrypt" element={<Resultencrypt />} />
      <Route path="resultdecoding" element={<Resultdecoding />} />
      <Route path="sizeerror" element={<Sizeerror />} />
      <Route path="sizeformat" element={<Sizeformat />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
); 