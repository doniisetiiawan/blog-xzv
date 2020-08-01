import PropTypes from 'prop-types';
import React from 'react';

function Logout({ user }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      Logged in as: <b>{user}</b>
      <input type="submit" value="Logout" />
    </form>
  );
}

export default Logout;

Logout.propTypes = {
  user: PropTypes.string,
};

Logout.defaultProps = {
  user: 'Daniel Bugl',
};
