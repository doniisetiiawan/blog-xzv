/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import React from 'react';

function CreatePost({ user }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>Author: <b>{user}</b></div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input type="text" name="create-title" id="create-title" />
      </div>
      <textarea />
      <input type="submit" value="Create" />
    </form>
  );
}

export default CreatePost;

CreatePost.propTypes = {
  user: PropTypes.string,
};

CreatePost.defaultProps = {
  user: '',
};
