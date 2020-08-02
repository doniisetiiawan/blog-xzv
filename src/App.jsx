/* eslint-disable no-case-declarations */
import React, {
  useEffect,
  useReducer,
  useState,
} from 'react';
import { useResource } from 'react-request-hook';
import CreatePost from './post/createPost';
import PostList from './postList';
import UserBar from './user/userBar';
import appReducer from './reducers';
import Header from './header';
import { ThemeContext } from './themeContext';
import { StateContext } from './stateContext';
import ChangeTheme from './changeTheme';

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
  const { user, error } = state;

  const [posts, getPosts] = useResource(() => ({
    url: '/posts',
    method: 'get',
  }));
  useEffect(getPosts, []);
  useEffect(() => {
    if (posts && posts.error) {
      dispatch({ type: 'POSTS_ERROR' });
    }
    if (posts && posts.data) {
      dispatch({
        type: 'FETCH_POSTS',
        posts: posts.data.reverse(),
      });
    }
  }, [posts]);
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
          <Header text="React Hooks Blog" />
          <ChangeTheme theme={theme} setTheme={setTheme} />
          <br />
          <UserBar />
          <br />
          {user && <CreatePost />}
          <br />
          <hr />
          {error && <b>{error}</b>}
          <PostList />
        </div>
      </ThemeContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
