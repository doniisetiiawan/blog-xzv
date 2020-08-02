/* eslint-disable react/prop-types,react/no-array-index-key */
import React, { useEffect } from 'react';
import { useResource } from 'react-request-hook';
import ThemeItem from './themeItem';

function ChangeTheme({ theme, setTheme }) {
  const [themes, getThemes] = useResource(() => ({
    url: '/themes',
    method: 'get',
  }));
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
