/* eslint-disable no-case-declarations */
import React, { useEffect, useReducer, useState } from 'react';
import appReducer from './reducers';
import { ThemeContext } from './themeContext';
import { StateContext } from './stateContext';
import HeaderBar from './pages/headerBar';
import PostPage from './pages/postPage';

function App() {
  const [theme, setTheme] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral',
  });

  const [state, dispatch] = useReducer(appReducer, {
    user: '',
    posts: [],
    error: '',
  });
  const { user } = state;

  useEffect(() => {
    if (user) {
      document.title = `${user} - React Hooks Blog`;
    } else {
      document.title = 'React Hooks Blog';
    }
  }, [user]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <ThemeContext.Provider value={theme}>
        <div style={{ padding: 8 }}>
          <HeaderBar setTheme={setTheme} />
          <hr />
          {/* <HomePage /> */}

          <PostPage id="react-hooks" />
        </div>
      </ThemeContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
