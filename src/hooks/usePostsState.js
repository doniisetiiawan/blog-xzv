import { useContext } from 'react';
import { StateContext } from '../stateContext';

export default function usePostsState() {
  const { state } = useContext(StateContext);
  return state.posts;
}
