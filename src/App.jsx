/* eslint-disable no-case-declarations */
import React, {
  useEffect,
  useReducer,
  useState,
} from 'react';
import CreatePost from './post/createPost';
import PostList from './postList';
import UserBar from './user/userBar';
import appReducer from './reducers';
import Header from './header';
import { ThemeContext } from './themeContext';
import { StateContext } from './stateContext';
import ChangeTheme from './changeTheme';

const defaultPosts = [
  {
    title: 'React Hooks',
    content: 'The greatest thing since sliced bread!',
    author: 'Daniel Bugl',
  },
  {
    title: 'Using React Fragments',
    content: 'Keeping the DOM tree clean!',
    author: 'Daniel Bugl',
  },
];

function App() {
  const [theme, setTheme] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral',
  });

  const [state, dispatch] = useReducer(appReducer, {
    user: '',
    posts: defaultPosts,
  });
  const { user, posts } = state;

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
          {user && (
            <CreatePost />
          )}
          <br />
          <hr />
          <PostList posts={posts} />
        </div>
      </ThemeContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
