'use client';
import Link from 'next/link';
import { useContext, useState } from 'react';
import AuthContext from '../context/authContext';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { authenticated, login } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      login();
      setError(null);
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <main className="bg-blue-300 h-screen flex items-center justify-center">
      <div className="container bg-white p-8 rounded-lg shadow-md max-w-lg">
        <h1 className="text-center text-3xl font-bold mb-6">Liferay Quizz</h1>

        {authenticated ? (
          <div className="flex justify-center">
            <Link href="/quizz/page">
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 transition duration-300 ease-in-out rounded-lg shadow-md">
                Start
              </button>
            </Link>
          </div>
        ) : (
          <>
    <form onSubmit={handleLogin}>
        <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4 w-full p-2 border-blue-300 bg-blue-50 hover:border-blue-500 rounded-md"
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 w-full p-2 border-blue-300 bg-blue-50 hover:border-blue-500 rounded-md"
        />
        <button
            type="submit"
            className={`bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 transition duration-300 ease-in-out rounded-lg shadow-md block w-full ${(!username || !password) ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!username || !password}
        >
            Login
        </button>
    </form>
            {error && <p className="mt-4 text-center text-red-500">{error}</p>}
          </>
        )}
      </div>
    </main>
  )
}
