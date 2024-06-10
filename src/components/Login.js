import React from 'react';

function Login({ onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(); // Call parent's handleLogin function to update state
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
