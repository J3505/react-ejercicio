// useLogin.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => { 
    e.preventDefault();

    const { data, error } = await supabase 
      .from('users') 
      .select('*') 
      .eq('username', username)
      .eq('password', password) 
      .single();

    if (error) { 
      console.error('Error al iniciar sesión:', error.message);
      setError('Verifica tu usuario y contraseña.');
    } else if (data) {
      console.log('Acceso correcto:', data);
      setError(null);
      navigate('/inform');
    }
  };

  const handleSignUp = () => { 
    navigate('/signup');
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    handleLogin,
    handleSignUp,
  };
};