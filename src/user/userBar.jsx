import React from 'react';
import Logout from './logout';
import Login from './login';
import Register from './register';

function UserBar() {
  const user = 'Daniel Bugl';

  if (user) {
    return <Logout user={user} />;
  }
  return (
    <>
      <Login />
      <Register />
    </>
  );
}

export default UserBar;
