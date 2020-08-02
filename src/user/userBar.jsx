import React, { useContext } from 'react';
import Login from './login';
import Register from './register';
import { StateContext } from '../stateContext';

const Logout = React.lazy(() => import('./logout'));

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
