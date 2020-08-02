/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import { StateContext } from '../stateContext';

function Login() {
  const { dispatch } = useContext(StateContext);

  const [username, setUsername] = useState('');

  function handleUsername(evt) {
    setUsername(evt.target.value);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: 'LOGIN', username });
      }}
    >
      <label htmlFor="login-username">Username:</label>
      <input
        type="text"
        value={username}
        onChange={handleUsername}
        name="login-username"
        id="login-username"
      />
      <label htmlFor="login-password">Password:</label>
      <input
        type="password"
        name="login-password"
        id="login-password"
      />
      <input
        type="submit"
        value="Login"
        disabled={username.length === 0}
      />
    </form>
  );
}

export default Login;
