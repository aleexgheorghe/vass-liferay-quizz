'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password123') {
      setAuthenticated(true);
      setError(null);
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="container bg-white p-8 rounded-lg shadow-md max-w-lg">
        <h1 className="text-center text-3xl font-bold mb-6">Quizz APP</h1>

        {authenticated ? (
          <div className="flex justify-center">
            <Link href="/quizz">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 transition duration-300 ease-in-out rounded-lg shadow-md">
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
                className="mb-4 w-full p-2 border rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-4 w-full p-2 border rounded-md"
              />
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 transition duration-300 ease-in-out rounded-lg shadow-md block w-full">
                Login
              </button>
            </form>
            {error && <p className="mt-4 text-red-600">{error}</p>}
          </>
        )}
      </div>
    </main>
  )
}
