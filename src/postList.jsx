/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React from 'react';
import Post from './post/post';

function PostList({ posts = [] }) {
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

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.any),
};

PostList.defaultProps = {
  posts: [],
};
