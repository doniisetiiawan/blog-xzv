import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext';

function Post({ title, content, author }) {
  const { secondaryColor } = useContext(ThemeContext);

  return (
    <div>
      <h3 style={{ color: secondaryColor }}>{title}</h3>
      <div>{content}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
    </div>
  );
}

export default Post;

Post.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  title: PropTypes.string,
};

Post.defaultProps = {
  author: '',
  content: '',
  title: '',
};
