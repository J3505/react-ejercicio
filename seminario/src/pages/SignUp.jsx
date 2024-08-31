import { useState } from 'react';
import { supabase } from '../supabaseClient';

const SignUp = () => {
  const [email, setEmail] = useState(''); //useState para controlar el estado
  const [password, setPassword] = useState(''); //en el inicio el valor de email y password es vacio
  const [username, setUsername] = useState('');

  const handleSignUp = async (e) => { //se define la funcion handleSignUp que es asincrona osea puede realizar operaciones 
    //que tardan tiempo en completarse y recibe el parametro e que es el evento que llama a la funcion
    e.preventDefault(); //evita que el formulario se recargue

    const role_id = 1; //asigna el valor 1 a la variable role_id

    const { data, error } = await supabase //interactua con la bd y await espera que la operacion asincrona se
    //complete para ejecutarse
      .from('users') // tabla users
      .insert([{  // inserta los datos en la tabla users
        email, 
        password, 
        username,
        role_id, 
        created_at: new Date()
      }]);

    if (error) {
      console.error('Error al crear la cuenta:', error); //pinta el error
    } else {
      console.log('La cuenta fue creada exitosamente:', data); //pinta el acceso correcto
    }
  };
  
  return (
    <form onSubmit={handleSignUp}> 
      <h2>Crear Cuenta</h2>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} /* se actualiza el valor de la variable username*/
        placeholder="Username" 
        required 
      />
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
        required 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
        required 
      />
      <button type="submit">Crear Cuenta</button>
    </form>
  );
};

export default SignUp;