import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-navi';
import { useTheme } from '../hooks';

function Post({
  id,
  title,
  content,
  author,
  short = false,
}) {
  console.log('rendering Post');
  const { secondaryColor } = useTheme();

  let processedContent = content;
  if (short) {
    if (content.length > 30) {
      processedContent = `${content.substring(0, 30)}...`;
    }
  }

  return (
    <div>
      <h3 style={{ color: secondaryColor }}>{title}</h3>
      <div>{processedContent}</div>
      {short && (
        <div>
          <br />
          <Link href={`/view/${id}`}>View full post</Link>
        </div>
      )}
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
  id: PropTypes.string,
  short: PropTypes.bool,
  title: PropTypes.string,
};

Post.defaultProps = {
  author: '',
  content: '',
  id: '',
  short: false,
  title: '',
};
