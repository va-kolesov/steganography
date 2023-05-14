import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import "./Main.css";

function Main() {
    return (
        <div className="Page_root Main">
                <div className="index_header">
                <div className="Main_header_block">
                    <span className="Main_header_text">Что необходимо сделать?</span>
                    </div>
               </div> 
                <div className="index_middle">
               
                    <Link to="/encrypt" style={{ textDecoration: 'none' }}>
                        <button className="button_main"  >
                            <span className="index_middle_text">Зашифровать</span>
                        </button>
                    </Link>
                    <Link to="/decoding" style={{ textDecoration: 'none' }}>
                        <button className="button_main" >
                            <span className="index_middle_text">Расшифровать</span>
                        </button>
                    </Link>
 
                </div>
                <div className="flex-row">
                <span>   
                </span>
                 <div className="stenog">
                      <span className="text3">Стеганография в BPM</span>
                    </div>
                </div>
        </div>
    );
}

export default Main;
