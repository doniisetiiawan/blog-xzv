import { useContext } from 'react';
import { StateContext } from '../stateContext';

export default function useDispatch(
  context = StateContext,
) {
  const { dispatch } = useContext(context);
  return dispatch;
}
