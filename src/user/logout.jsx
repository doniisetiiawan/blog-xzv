import PropTypes from 'prop-types';
import React from 'react';

function Logout({ user, dispatch }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: 'LOGOUT' });
      }}
    >
      Logged in as: <b>{user}</b>
      <input type="submit" value="Logout" />
    </form>
  );
}

export default Logout;

Logout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.string,
};

Logout.defaultProps = {
  user: 'Daniel Bugl',
};
