/* eslint-disable no-case-declarations */
import React, { useReducer } from 'react';
import CreatePost from './post/createPost';
import PostList from './postList';
import UserBar from './user/userBar';

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

function userReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
    case 'REGISTER':
      return action.username;

    case 'LOGOUT':
      return '';

    default:
      throw new Error();
  }
}

function postsReducer(state, action) {
  switch (action.type) {
    case 'CREATE_POST':
      const newPost = {
        title: action.title,
        content: action.content,
        author: action.author,
      };
      return [newPost, ...state];

    default:
      throw new Error();
  }
}

function App() {
  const [user, dispatchUser] = useReducer(userReducer, '');
  const [posts, dispatchPosts] = useReducer(
    postsReducer,
    defaultPosts,
  );

  return (
    <div style={{ padding: 8 }}>
      <UserBar user={user} dispatch={dispatchUser} />
      <br />
      {user && (
        <CreatePost user={user} dispatch={dispatchPosts} />
      )}
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
