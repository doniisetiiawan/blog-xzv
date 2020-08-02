/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import Post from './post';
import { StateContext } from '../stateContext';

function PostList() {
  const { state } = useContext(StateContext);
  const { posts } = state;

  return (
    <div>
      {posts.map((p, i) => (
        <React.Fragment key={`post-${i}`}>
          <Post {...p} short />
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
}

export default PostList;
