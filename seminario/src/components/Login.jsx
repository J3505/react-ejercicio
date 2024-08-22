import { Component } from "react";
import PropTypes from "prop-types";
import logoA from "./img/imgA.svg";
import ImgSI from "./img/logoSI.png";

import "./css/style.css";
// rcc importante
// import svg from './img/imgA.svg';
class Login extends Component {
render() {
    return (
        <>
        <section className="Container">
        <div className="img">
            <img src={ImgSI} alt="" width={450} />
            <img src={logoA} alt="" width={625} />
        </div>
        <div className="for">
            <form action="" className="form">
            <div className="separator">
                <div></div>
                <span>Login</span>
                <div></div>
            </div>
            <input type="text" placeholder="Usuario" name="usuario" />
            <input type="email" placeholder="Contraseña" name="email" />

            <div className="form-block">
                <div>
                    <button className="oauthButton">Iniciar sesion</button>
                </div>
                <div>
                    <button className="oauthButton">Crear cuenta</button>
                </div>
            </div>
            <div className="separator">
                <div></div>
                <div></div>
            </div>
            </form>
        </div>
        </section>
        </>
    );
    }
}

Login.propTypes = {};

export default Login;
