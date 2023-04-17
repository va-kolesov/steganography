import React from "react";
import { useNavigate } from "react-router-dom";

const Sizeformat = () => {
  let navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <body class="img6" >
        <div className="errformat">
            <p className="errsizep">Неподходящий формат изображения, допустимый формат BMP  </p>
        </div>
    <div>

      
      
      <button  className="buttonnazad" onClick={goHome}>Назад</button>
     
    </div>
    </body>
  );
};

export default Sizeformat;