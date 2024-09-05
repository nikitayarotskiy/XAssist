// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Backend } from '../backend';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const backend = new Backend();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(''); // Clear any previous errors

    try {
      const token = await backend.getToken(username, password)
      console.log(token)
      localStorage.setItem('TOKEN', token);

      const marks = await backend.getMarks(token);
      console.log(marks)
      if (marks && marks.length > 0) {
        navigate('/');
      } else {
        setError('Username or password is incorrect');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="input input-bordered w-full"
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="input input-bordered w-full"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="text-red-500 text-center mb-4">{error}</div>}
            <div className="flex items-center justify-center">
              <button
                className="w-full bg-black p-3 rounded-xl"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Sign In'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
