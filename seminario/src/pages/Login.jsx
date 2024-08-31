// Login.jsx
import logoA from "./img/imgA.svg";
import ImgSI from "./img/logoSI.png";
import { useLogin } from "./useLogin";
import "./css/style.css";

const Login = () => {
  const { 
    username, 
    setUsername, 
    password, 
    setPassword, 
    error, 
    handleLogin, 
    handleSignUp 
  } = useLogin();

  return (
    <section className="Container">
      <div className="img">
        <img src={ImgSI} alt="" width={450} />
        <img src={logoA} alt="" width={625} />
      </div>
      <div className="for">
        <form action="" className="form" onSubmit={handleLogin}> 
          <div className="separator">
            <div></div>
            <span>Login</span>
            <div></div>
          </div>
          <input 
            type="text" 
            placeholder="Usuario" 
            name="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

          {error && <p className="error-message">{error}</p>} 

          <div className="form-block">
            <div>
              <button type="submit" className="oauthButton">Iniciar sesión</button>
            </div>
            <div>
              <button 
                type="button" 
                className="oauthButton"
                onClick={handleSignUp}
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
};

export default Login;