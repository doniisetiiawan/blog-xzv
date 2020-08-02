import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext';
import { StateContext } from '../stateContext';
import Header from '../header';
import ChangeTheme from '../changeTheme';
import UserBar from '../user/userBar';
import CreatePost from '../post/createPost';

function HeaderBar({ setTheme }) {
  const theme = useContext(ThemeContext);

  const { state } = useContext(StateContext);
  const { user } = state;

  return (
    <div>
      <Header text="React Hooks Blog" />
      <ChangeTheme theme={theme} setTheme={setTheme} />
      <br />
      <React.Suspense fallback="Loading...">
        <UserBar />
      </React.Suspense>
      <br />
      {user && <CreatePost />}
    </div>
  );
}

export default HeaderBar;

HeaderBar.propTypes = {
  setTheme: PropTypes.func.isRequired,
};
