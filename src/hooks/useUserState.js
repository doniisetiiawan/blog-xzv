import { useContext } from 'react';
import { StateContext } from '../stateContext';

export default function useUserState() {
  const { state } = useContext(StateContext);
  return state.user;
}
