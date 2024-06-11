import React, { useState } from 'react';
import './../styles/App.css';

import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <h1>Parent Component</h1>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
