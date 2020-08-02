/* eslint-disable react/prop-types,react/jsx-filename-extension */
import React, { useReducer } from 'react';
import appReducer from '../reducers';
import { ThemeContext } from '../themeContext';
import { StateContext } from '../stateContext';

export function ThemeContextWrapper({ children }) {
  return (
    <ThemeContext.Provider
      value={{
        primaryColor: 'deepskyblue',
        secondaryColor: 'coral',
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function StateContextWrapper({ children }) {
  const [state, dispatch] = useReducer(appReducer, {
    user: '',
    posts: [],
    error: '',
  });
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}
