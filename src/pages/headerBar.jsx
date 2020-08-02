import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import useWindowSize from '@rehooks/window-size';
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

  const { innerWidth } = useWindowSize();
  const mobilePhone = innerWidth < 640;

  return (
    <div>
      <Header text="React Hooks Blog" />
      {!mobilePhone && (
        <ChangeTheme theme={theme} setTheme={setTheme} />
      )}
      {!mobilePhone && <br />}
      {!mobilePhone && (
        <React.Suspense fallback="Loading...">
          <UserBar />
        </React.Suspense>
      )}
      {!mobilePhone && <br />}
      {user && <CreatePost />}
    </div>
  );
}

export default HeaderBar;

HeaderBar.propTypes = {
  setTheme: PropTypes.func.isRequired,
};
