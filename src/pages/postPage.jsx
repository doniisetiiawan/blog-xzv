import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useResource } from 'react-request-hook';
import { Link } from 'react-navi';
import Post from '../post/post';

function PostPage({ id }) {
  const [post, getPost] = useResource(() => ({
    url: `/posts/${id}`,
    method: 'get',
  }));
  useEffect(getPost, [id]);

  return (
    <div>
      <div>
        <Link href="/">Go back</Link>
      </div>
      {post && post.data ? (
        <Post {...post.data} />
      ) : (
        'Loading...'
      )}
      <hr />
    </div>
  );
}

export default PostPage;

PostPage.propTypes = {
  id: PropTypes.string,
};

PostPage.defaultProps = {
  id: '',
};
