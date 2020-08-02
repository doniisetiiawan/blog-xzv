import React, { useContext } from 'react';
import { StateContext } from '../stateContext';

function Logout() {
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;

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
