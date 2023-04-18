import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Main() {
    return (
        <div className="img">
            <div className="wraper">
                <div className="box1">
                    <p className="text1">Что нужно сделать?</p>
                </div>
                <div className="index_middle">
                    <Link to="/decoding">
                        <button className="button2">
                            <p className="p2">Расшифровать</p>
                        </button>
                    </Link>
                    <Link to="/encrypt">
                        <button className="button1">
                            <p className="p2">Зашифровать</p>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/sizeerror">
                        <button>
                            <p className="p2">размер</p>
                        </button>
                    </Link>
                    <Link to="/sizeformat">
                        <button>
                            <p className="p2">размер</p>
                        </button>
                    </Link>
                    <div className="stenog">
                        <p className="text3">Стенография в BPM</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
