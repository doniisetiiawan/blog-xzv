import React, { useContext } from 'react';
import Logout from './logout';
import Login from './login';
import Register from './register';
import { StateContext } from '../stateContext';

function UserBar() {
  const { state } = useContext(StateContext);
  const { user } = state;

  if (user) {
    return <Logout />;
  }
  return (
    <>
      <Login />
      <Register />
    </>
  );
}

export default UserBar;
