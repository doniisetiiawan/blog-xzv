/* eslint-disable react/prop-types,react/no-array-index-key */
import React from 'react';
import ThemeItem from './themeItem';

const THEMES = [
  { primaryColor: 'deepskyblue', secondaryColor: 'coral' },
  {
    primaryColor: 'orchid',
    secondaryColor: 'mediumseagreen',
  },
];

function ChangeTheme({ theme, setTheme }) {
  function isActive(t) {
    return (
      t.primaryColor === theme.primaryColor
      && t.secondaryColor === theme.secondaryColor
    );
  }

  return (
    <div>
      Change theme:
      {THEMES.map((t, i) => (
        <ThemeItem
          key={`theme-${i}`}
          theme={t}
          active={isActive(t)}
          onClick={() => setTheme(t)}
        />
      ))}
    </div>
  );
}

export default ChangeTheme;
