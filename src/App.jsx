/* eslint-disable no-case-declarations */
import React, { useReducer } from 'react';
import CreatePost from './post/createPost';
import PostList from './postList';
import UserBar from './user/userBar';
import appReducer from './reducers';

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

  return (
    <div style={{ padding: 8 }}>
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
