import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can implement your login logic here
    if (email && password) {
      setMessage(`Successfully logged in with email: ${email}`);
    } else {
      setMessage('Please enter both email and password.');
    }
  };    

  return (
    <div className='text-red-800 max-w-full flex justify-center overflow-hidden py-4'>
      <form className='flex text-2xl flex-col items-center px-4' onSubmit={handleSubmit}>
        <div className='flex py-4 flex-col gap-2 px-3'>
          <div className='flex flex-col gap-2 items-center'>
            <div className='font-bold text-xl'>Login</div>
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
            Login
          </button>
        </div>
        {message && <p className='max-w-xl text-center py-4'>{message}</p>}
      </form>
    </div>
  );
}

export default Login;
