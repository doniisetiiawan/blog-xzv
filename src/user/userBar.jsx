import PropTypes from 'prop-types';
import React from 'react';
import Logout from './logout';
import Login from './login';
import Register from './register';

function UserBar({ user, dispatch }) {
  if (user) {
    return <Logout user={user} dispatch={dispatch} />;
  }
  return (
    <>
      <Login dispatch={dispatch} />
      <Register dispatch={dispatch} />
    </>
  );
}

export default UserBar;

UserBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.string,
};

UserBar.defaultProps = {
  user: '',
};
