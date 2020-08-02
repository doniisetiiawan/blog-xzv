/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import Post from './post/post';
import { StateContext } from './stateContext';

function PostList() {
  const { state } = useContext(StateContext);
  const { posts } = state;

  return (
    <div>
      {posts.map((p, i) => (
        <React.Fragment key={`post-${i}`}>
          <Post {...p} />
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
}

export default PostList;
