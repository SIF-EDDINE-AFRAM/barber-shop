import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert('empty email or password')
      return
    }
    try {
      const response = await axios.post(
        `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/signup`,
        { email, password },
        { withCredentials: true }
      );

      if (response.status === 200) {
        setMessage("Successfully signup in");
        navigate('/login'); 
      } else {
        setMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setMessage("Invalid email or password.");
      console.error('Login error:', error);
    }
  };

  return (
    <div className='text-red-800 max-w-full flex justify-center overflow-hidden py-4'>
      <form className='flex text-2xl flex-col items-center px-4' onSubmit={handleSubmit}>
        <div className='flex py-4 flex-col gap-2 px-3'>
          <div className='flex flex-col gap-2 items-center'>
            <div className='font-bold text-xl'>Signup</div>
            <div className='border border-red-800 rounded-lg p-10'>
              <div className='font-bold text-left'>Email:</div>
              <input
                type='email'
                className='bg-neutral-300 border w-80 border-red-800 px-3 placeholder:text-red-800'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                required
              />
              <div className='font-bold text-left mt-4'>Password:</div>
              <input
                type='password'
                className='bg-neutral-300 border w-80 border-red-800 px-3 placeholder:text-red-800'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your password'
                required
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-80 py-4">
          <button className='bg-red-800 nav text-neutral-300 px-4 py-2' type="submit">
            Signup
          </button>
        </div>
        {message && <p className='max-w-xl text-center py-4'>{message}</p>}
      </form>
    </div>
  );
}

export default Signup;
