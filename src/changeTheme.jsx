/* eslint-disable react/prop-types,react/no-array-index-key */
import React, { useEffect } from 'react';
import ThemeItem from './themeItem';
import { useAPIThemes } from './hooks';

function ChangeTheme({ theme, setTheme }) {
  const [themes, getThemes] = useAPIThemes();
  const { data, isLoading } = themes;

  useEffect(getThemes, []);

  function isActive(t) {
    return (
      t.primaryColor === theme.primaryColor
      && t.secondaryColor === theme.secondaryColor
    );
  }

  return (
    <div>
      Change theme:
      {isLoading && ' Loading themes...'}
      {data
        && data.map((t, i) => (
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
