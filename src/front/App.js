import { Link } from "react-router-dom";
import "./styles.css";

function App() {

  return (
    <body class="img" >
      <div class="wraper">
   <div class="box1">  
      <p class="text1">
       Что нужно сделать?
      </p >
      </div>
     <div class="index_middle">
      <Link to="/decoding"><button className="button2" ><p class="p2">Расшифровать</p></button></Link>
      <Link to="/encrypt"><button className="button1"><p class="p2">Зашифровать</p></button></Link>
      </div>
     <div >
   <Link to="/sizeerror"><button ><p class="p2">размер</p></button></Link>
   <Link to="/sizeformat"><button ><p class="p2">размер</p></button></Link>
   <div className="stenog">
   <p class="text3">Стенография в BPM</p>
   </div>
   </div>
   </div>
    </body>
  );
}

export default App;
