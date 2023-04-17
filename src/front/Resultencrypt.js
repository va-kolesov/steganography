import React from "react";
import { useNavigate } from "react-router-dom";

const Resultencrypt = () => {
  let navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <body class="img4" >
    <div>

      
      <div className="shifrovanieitog">
      <p className="shifrovanieitog2">Изображение</p>
      
     </div>
      <button  className="buttonnazad" onClick={goHome}>Назад</button>
      <button className="buttonsohr"> Сохранить</button>
    </div>
    </body>
  );
};

export default Resultencrypt;