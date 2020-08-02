/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect } from 'react';
import { useResource } from 'react-request-hook';
import { useNavigation } from 'react-navi';
import { useInput } from 'react-hookedup';
import useUndo from 'use-undo';
import { StateContext } from '../stateContext';

function CreatePost() {
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;

  const { value: title, bindToInput: bindTitle } = useInput(
    '',
  );
  const [
    undoContent,
    {
      set: setContent, undo, redo, canUndo, canRedo,
    },
  ] = useUndo('');

  const content = undoContent.present;

  function handleContent(e) {
    setContent(e.target.value);
  }

  const [post, createPost] = useResource(
    ({ title, content, author }) => ({
      url: '/posts',
      method: 'post',
      data: { title, content, author },
    }),
  );

  const navigation = useNavigation();

  useEffect(() => {
    if (post && post.data) {
      dispatch({ type: 'CREATE_POST', ...post.data });
      navigation.navigate(`/view/${post.data.id}`);
    }
  }, [post]);

  function handleCreate() {
    createPost({ title, content, author: user });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate();
      }}
    >
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input
          type="text"
          value={title}
          {...bindTitle}
          name="create-title"
          id="create-title"
        />
      </div>
      <textarea value={content} onChange={handleContent} />
      <input type="submit" value="Create" />
      <button type="button" onClick={undo} disabled={!canUndo}>Undo</button>
      <button type="button" onClick={redo} disabled={!canRedo}>Redo</button>
    </form>
  );
}

export default CreatePost;
