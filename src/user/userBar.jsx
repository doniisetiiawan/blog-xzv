import React from 'react';
import Login from './login';
import Register from './register';
import { useUserState } from '../hooks';

const Logout = React.lazy(() => import('./logout'));

function UserBar() {
  const user = useUserState();

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
