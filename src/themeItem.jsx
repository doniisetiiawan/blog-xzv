// eslint-disable-next-line max-len
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,react/prop-types */
import React from 'react';

function ThemeItem({ theme, active, onClick }) {
  return (
    <span
      onClick={onClick}
      style={{
        cursor: 'pointer',
        paddingLeft: 8,
        fontWeight: active ? 'bold' : 'normal',
      }}
    >
      <span style={{ color: theme.primaryColor }}>
        Primary
      </span>{' '}
      /{' '}
      <span style={{ color: theme.secondaryColor }}>
        Secondary
      </span>
    </span>
  );
}

export default ThemeItem;
