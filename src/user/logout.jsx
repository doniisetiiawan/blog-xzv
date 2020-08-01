import PropTypes from 'prop-types';
import React from 'react';

function Logout({ user, setUser }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setUser('');
      }}
    >
      Logged in as: <b>{user}</b>
      <input type="submit" value="Logout" />
    </form>
  );
}

export default Logout;

Logout.propTypes = {
  setUser: PropTypes.func.isRequired,
  user: PropTypes.string,
};

Logout.defaultProps = {
  user: 'Daniel Bugl',
};
