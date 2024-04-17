// LoginForm.js
import React, { useState } from 'react';

const LoginForm = () => {
  // Estados para almacenar los valores de usuario y contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica de autenticación o simplemente imprimir los valores
    console.log(`Usuario: ${username}, Contraseña: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Usuario:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Contraseña:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default LoginForm;
