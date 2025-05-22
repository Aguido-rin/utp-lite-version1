
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('user', 'true');
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Iniciar Sesión</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '10px' }}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '10px' }}
      />
      <button onClick={handleLogin} style={{ width: '100%' }}>Entrar</button>
    </div>
  );
}

export default Login;