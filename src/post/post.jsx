import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext';

function Post({ title, content, author }) {
  console.log('rendering Post');

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

export default React.memo(
  Post,
  (prev, next) => prev.title === next.title
    && prev.content === next.content
    && prev.author === next.author,
);

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
