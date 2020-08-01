/* eslint-disable no-case-declarations */
import React, { useEffect, useReducer } from 'react';
import CreatePost from './post/createPost';
import PostList from './postList';
import UserBar from './user/userBar';
import appReducer from './reducers';
import Header from './header';

export const ThemeContext = React.createContext({
  primaryColor: 'coral',
});

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
    <div style={{ padding: 8 }}>
      <Header />
      <UserBar user={user} dispatch={dispatch} />
      <br />
      {user && (
        <CreatePost user={user} dispatch={dispatch} />
      )}
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
