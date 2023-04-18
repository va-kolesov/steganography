import { render } from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Decoding from "./Decoding";

import Encrypt from "./Encrypt";
import Resultencrypt from "./Resultencrypt";
import Resultdecoding from "./Resultdecoding";
import Sizeerror from "./Sizeerror";
import Sizeformat from "./Sizeformat";
render(
  <HashRouter>
    <Switch>
      <Route path="/" element={<App />} />
      <Route path="decoding" element={<Decoding />} />
      <Route path="encrypt" element={<Encrypt />} />
      <Route path="resultencrypt" element={<Resultencrypt />} />
      <Route path="resultdecoding" element={<Resultdecoding />} />
      <Route path="sizeerror" element={<Sizeerror />} />
      <Route path="sizeformat" element={<Sizeformat />} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
); 