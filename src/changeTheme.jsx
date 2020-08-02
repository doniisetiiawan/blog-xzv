/* eslint-disable react/prop-types,react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import ThemeItem from './themeItem';

function ChangeTheme({ theme, setTheme }) {
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    fetch('/api/themes')
      .then((result) => result.json())
      .then((posts) => setThemes(posts));
  }, []);

  function isActive(t) {
    return (
      t.primaryColor === theme.primaryColor
      && t.secondaryColor === theme.secondaryColor
    );
  }

  return (
    <div>
      Change theme:
      {themes.map((t, i) => (
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
