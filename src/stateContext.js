import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export const StateContext = React.createContext({
  state: {},
  dispatch: () => {},
});
