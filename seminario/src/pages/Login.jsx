import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoA from "./img/imgA.svg";
import ImgSI from "./img/logoSI.png";
import { supabase } from "../supabaseClient";

import "./css/style.css";

const Login = () => {
  const [username, setUsername] = useState('');//utilizo useState para controlar el estado
  const [password, setPassword] = useState('');//en el inicio el valor de username y password es vacio
  const [error, setError] = useState(null);//el valor de inicio de error es null

  const navigate = useNavigate();//utilizo el hook useNavigate de la biblioteca react-router-dom para redireccionar 
  //al usuario entre paginas

  const handleLogin = async (e) => { //se define la funcion handlelogin que es asincrona osea puede realizar operaciones
    //que tardan tiempo en completarse y recibe el parametro e que es el evento que llama a la funcion
    e.preventDefault(); //evita que el formulario se recargue

    const { data, error } = await supabase //interactua con la bd y await espera que la operacion asincrona se 
    //complete para ejecutarse
      .from('users') // tabla users
      .select('*') // todas las columnas
      .eq('username', username) // que el campo username sea igual al valor de la variable username
      .eq('password', password) // que el campo password sea igual al valor de la variable password
      .single(); // solo devuelve una fila

    if (error) { //si hay un error
      console.error('Error al iniciar sesion:', error.message); //pinta el error
      setError('Verifica tu usuario y contraseña.'); //asigna el error a la variable error
    } else if (data) { //si no hay error y la variable data tiene algo
      console.log('Acceso correcto:', data); //pinta el acceso correcto
      setError(null); //limpia el error
      navigate('/inform'); //redirecciona a la pagina inform
    }
  };

  const handleSignUp = () => { 
    navigate('/signup'); //redirecciona a la pagina signup
  };

  return (
    <section className="Container">
      <div className="img">
        <img src={ImgSI} alt="" width={450} />
        <img src={logoA} alt="" width={625} />
      </div>
      <div className="for">
        {/* onSubmit llama a la funcion handleLogin cuando se manda el formulario */}
        <form action="" className="form" onSubmit={handleLogin}> 
          <div className="separator">
            <div></div>
            <span>Login</span>
            <div></div>
          </div>
          <input 
            type="text" 
            placeholder="Usuario" 
            name="usuario" 
            value={username}
            onChange={(e) => setUsername(e.target.value)} /* se actualiza el valor de la variable username*/
            required
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            name="password"
            value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

          {error && <p className="error-message">{error}</p>} {/* si hay un error pinta el error */}

          <div className="form-block">
            <div>
              <button type="submit" className="oauthButton">Iniciar sesión</button>
            </div>
            <div>
              <button 
                type="button" 
                className="oauthButton"
                onClick={handleSignUp} /* onClick llama a la funcion handleSignUp que redirecciona a la pagina signup*/
              >
                Crear cuenta
              </button>
            </div>
          </div>
          <div className="separator">
            <div></div>
            <div></div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
