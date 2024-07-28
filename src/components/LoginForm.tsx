import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User successfully logged in!');
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (err) {
      if (err instanceof Error) {
        setError('Error logging in: ' + err.message);
      } else {
        setError('Unknown error logging in');
      }
    }
  };

  const handleInputClick = () => {
    setError(null);
  };

  return (
    <div className='font-poppins flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <form className='bg-white p-8 rounded shadow-md w-full max-w-sm' onSubmit={handleSignIn}>
        <h2 className='text-4xl text-golden font-bold mb-4'>Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onClick={handleInputClick}
          placeholder="Email"
          className="w-full p-2 border border-lightGray rounded mb-4"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onClick={handleInputClick}
          placeholder="Senha"
          className="w-full p-2 border border-lightGray rounded mb-4"
        />
        {error && <p className="text-red-800 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-golden text-white p-2 rounded"
        >
          Entrar
        </button>
        <p className='text-center text-graphite text-sm mt-2'>Don't have an account yet? <Link to='/signup' className='text-golden'>Sign up</Link>.</p>
      </form>
    </div>
  );
};

export default LoginForm;

