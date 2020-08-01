import PropTypes from 'prop-types';
import React from 'react';
import Logout from './logout';
import Login from './login';
import Register from './register';

function UserBar({ user, setUser }) {
  if (user) {
    return <Logout user={user} setUser={setUser} />;
  }
  return (
    <>
      <Login setUser={setUser} />
      <Register setUser={setUser} />
    </>
  );
}

export default UserBar;

UserBar.propTypes = {
  setUser: PropTypes.func.isRequired,
  user: PropTypes.string,
};

UserBar.defaultProps = {
  user: '',
};
