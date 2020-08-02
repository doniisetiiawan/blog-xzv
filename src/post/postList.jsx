/* eslint-disable react/no-array-index-key */
import React from 'react';
import Post from './post';
import { usePostsState } from '../hooks';

function PostList() {
  const posts = usePostsState();

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
