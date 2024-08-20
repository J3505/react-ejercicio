import { Component } from "react";
import PropTypes from "prop-types";

import "./css/style.css";
// rcc importante
import svg from './img/imgA.svg';
class Login extends Component {
render() {
    return (
        <>
        <section className="Container">
        <div className="img">
            <img src="{ svg}" alt="" />
            <img src="https://i.pinimg.com/736x/b1/5a/34/b15a34ae7890d75945ba1df15ca9da5f.jpg" alt="" />
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
